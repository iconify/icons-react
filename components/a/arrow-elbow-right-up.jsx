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
		"content": `<style>.cbow5ok7a {
  fill: currentColor;
  d: path("M221.66 101.66a8 8 0 0 1-11.32 0L176 67.31V192a8 8 0 0 1-8 8H24a8 8 0 0 1 0-16h136V67.31l-34.34 34.35a8 8 0 0 1-11.32-11.32l48-48a8 8 0 0 1 11.32 0l48 48a8 8 0 0 1 0 11.32");
}
</style><path class="cbow5ok7a"/>`,
		"fallback": "ph:arrow-elbow-right-up",
	});
}

export default Component;
