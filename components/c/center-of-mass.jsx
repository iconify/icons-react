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
		"content": `<style>.a1scjvbfo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.123 9.598l10.826-6.014a1.5 1.5 0 0 1 1.85.315L18.7 6.037a1.5 1.5 0 0 1-.451 2.338L7.037 13.982a1.5 1.5 0 0 1-1.8-.354l-1.514-1.731a1.5 1.5 0 0 1 .4-2.299m9.234 4.786l1.637 3.477A1.5 1.5 0 0 1 13.636 20h-3.272a1.5 1.5 0 0 1-1.358-2.139l1.637-3.477a1.5 1.5 0 0 1 2.714 0M12 8.5h.01");
}
</style><path class="a1scjvbfo"/>`,
		"fallback": "uix:center-of-mass",
	});
}

export default Component;
