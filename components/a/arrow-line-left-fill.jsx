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
		"content": `<style>.rh5n8ubxk {
  fill: currentColor;
  d: path("M48 40v176a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0m176 80h-72V56a8 8 0 0 0-13.66-5.66l-72 72a8 8 0 0 0 0 11.32l72 72A8 8 0 0 0 152 200v-64h72a8 8 0 0 0 0-16");
}
</style><path class="rh5n8ubxk"/>`,
		"fallback": "ph:arrow-line-left-fill",
	});
}

export default Component;
