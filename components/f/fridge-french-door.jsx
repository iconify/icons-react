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
		"content": `<style>.pkerrohab {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.125 2.5h9.75A2.625 2.625 0 0 1 19.5 5.125v13.75a2.625 2.625 0 0 1-2.625 2.625h-9.75A2.625 2.625 0 0 1 4.5 18.875V5.125A2.625 2.625 0 0 1 7.125 2.5M4.5 15h15M12 2.5V15M9.25 6.5v4m5.5-4v4M9.5 18.25h5");
}
</style><path class="pkerrohab"/>`,
		"fallback": "uix:fridge-french-door",
	});
}

export default Component;
