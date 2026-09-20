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
		"content": `<style>.dpe90gbdv {
  d: path("M8 9h8c2 0 3 2 3 5 0 2 -1 3.5 -2.5 3.5s-2.5 -2 -4.5 -2 -3 2 -4.5 2S5 16 5 14c0 -3 1 -5 3 -5");
}

.fp-xawcad {
  fill: currentColor;
  d: path("M8 9h8c2 0 3 2 3 5 0 2 -1 3.5 -2.5 3.5s-2.5 -2 -4.5 -2 -3 2 -4.5 2S5 16 5 14c0 -3 1 -5 3 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qm75-abko {
  d: path("M21 5v4");
}

.vkmwcl8fv {
  d: path("M3 5v4");
}
</style><g class="hntgybcog"><path class="fp-xawcad"/><path class="dpe90gbdv"/><path class="vkmwcl8fv"/><path class="qm75-abko"/></g>`,
		"fallback": "iconmind:controller-vibrate-duotone-thin",
	});
}

export default Component;
