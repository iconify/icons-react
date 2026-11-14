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
		"content": `<style>.jz78ubbfy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.75 11.8l4.674 1.87a1.004 1.004 0 0 1 .076 1.83l-1.553.776a1.5 1.5 0 0 0-.671.671L15.5 18.5a1.004 1.004 0 0 1-1.83-.076L11.8 13.75a1.5 1.5 0 0 1 1.95-1.95M2.5 4a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m9 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M3 12.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M7.25 4h.01m2.49 0h.01m.74 2.75h.01M8 9.25h.01M7.25 12h.01");
}
</style><path class="jz78ubbfy"/>`,
		"fallback": "uix:click-path",
	});
}

export default Component;
