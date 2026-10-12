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
		"content": `<style>.faa3ooblc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.25v18m17-18v18m-17-4h17M8 8.25v9m4-9v9m4-9v9m-12.5-9h17");
}
</style><path class="faa3ooblc"/>`,
		"fallback": "iconoven:crib-clock",
	});
}

export default Component;
