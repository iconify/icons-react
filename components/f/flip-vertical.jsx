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
		"content": `<style>.pea2gtb0j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 12h2.5m2.5 0h2.5m2.5 0h2.5m2.5 0h2.5M8.575 9h6.85q1.2 0 1.2-1.2V4.2q0-1.2-1.01-.55l-7.23 4.7q-1.01.65.19.65m0 6h6.85q1.2 0 1.2 1.2v3.6q0 1.2-1.01.55l-7.23-4.7q-1.01-.65.19-.65");
}
</style><path class="pea2gtb0j"/>`,
		"fallback": "iconoven:flip-vertical",
	});
}

export default Component;
