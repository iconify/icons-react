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
		"content": `<style>.xk22spb7f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 19l8.75-8.75m2.474-3.996l4.454 2.304a1.5 1.5 0 0 1 .371 2.393l-3.098 3.098a1.5 1.5 0 0 1-2.393-.371l-2.304-4.454a1.5 1.5 0 0 1 .272-1.75l.948-.948a1.5 1.5 0 0 1 1.75-.272M12.5 7L10 4.5");
}
</style><path class="xk22spb7f"/>`,
		"fallback": "uix:crash-axe",
	});
}

export default Component;
