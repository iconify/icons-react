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
		"content": `<style>.e3fkgnlsf {
  d: path("M13 16h7");
}

.h5yksf4iw {
  d: path("M13 12h7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kamdbib6v {
  d: path("M2 7h20");
}

.n2ya_p02p {
  d: path("M13 7v13h7V7");
}

.v-q4myyjv {
  d: path("M4 7v13");
}
</style><g class="hntgybcog"><path class="kamdbib6v"/><path class="v-q4myyjv"/><path class="n2ya_p02p"/><path class="h5yksf4iw"/><path class="e3fkgnlsf"/></g>`,
		"fallback": "iconmind:home-desk-outline-thin",
	});
}

export default Component;
