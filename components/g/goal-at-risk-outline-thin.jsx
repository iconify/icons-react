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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hspeesv2z {
  d: path("M5.5 3v5.5a6.5 6.5 0 0 0 13 0V3");
}

.n3p0zmbop {
  d: path("M11 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.tv6hbrcra {
  d: path("M8.5 20.5h7");
}

.u0f6w1z_e {
  d: path("M12 6v3");
}

.ujt25lh2u {
  d: path("M12 15v5.5");
}
</style><g class="hntgybcog"><path class="hspeesv2z"/><path class="ujt25lh2u"/><path class="tv6hbrcra"/><path class="u0f6w1z_e"/><path class="n3p0zmbop"/></g>`,
		"fallback": "iconmind:goal-at-risk-outline-thin",
	});
}

export default Component;
