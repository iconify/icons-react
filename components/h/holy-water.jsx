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
		"content": `<style>.jqefb9eis {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.75h4v3.5l2.75 3.5c.5.6.75 1.25.75 2v8a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 0 1-1.5-1.5v-8c0-.75.25-1.4.75-2L10 6.25Zm0 2.5h4m-2 7v5.5m-2-3.5h4");
}
</style><path class="jqefb9eis"/>`,
		"fallback": "iconoven:holy-water",
	});
}

export default Component;
