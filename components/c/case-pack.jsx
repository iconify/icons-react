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
		"content": `<style>.fyufzibvc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11h19v9.5h-19ZM4 11V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6m2 0V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6m2 0V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6");
}
</style><path class="fyufzibvc"/>`,
		"fallback": "uix-sharp:case-pack",
	});
}

export default Component;
