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
		"content": `<style>.hecmx9b1v {
  fill: currentColor;
  d: path("M152.49 119.51a12 12 0 0 1 0 17l-80 80a12 12 0 0 1-17-17L127 128L55.51 56.49a12 12 0 0 1 17-17ZM184 36a12 12 0 0 0-12 12v160a12 12 0 0 0 24 0V48a12 12 0 0 0-12-12");
}
</style><path class="hecmx9b1v"/>`,
		"fallback": "ph:caret-line-right-bold",
	});
}

export default Component;
