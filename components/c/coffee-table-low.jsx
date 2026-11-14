import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rnhfalo5s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8.5a9.5 3.5 0 1 0 19 0a9.5 3.5 0 1 0-19 0M12 12v7m-4.5 0h9");
}
</style><path class="rnhfalo5s"/>`,
		"fallback": "uix:coffee-table-low",
	});
}

export default Component;
