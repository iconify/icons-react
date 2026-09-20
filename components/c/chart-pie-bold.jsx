import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fa4cmglbz {
  fill: currentColor;
  d: path("M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m12 24.87a84 84 0 0 1 54 31.2l-54 31.15Zm-90 114.3a83.94 83.94 0 0 1 66-114.3v76.2ZM128 212a83.88 83.88 0 0 1-65.95-32.07L206 96.83A84 84 0 0 1 128 212");
}
</style><path class="fa4cmglbz"/>`,
		"fallback": "ph:chart-pie-bold",
	});
}

export default Component;
