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

.iymet_cml {
  d: path("M15.5 4H19a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V8l4 -4h3.5");
}

.uhawluh-v {
  d: path("M6.5 9.5 9 12l-2.5 2.5");
}

.vc5bmsqzd {
  d: path("M5 12h4");
}

.w41b5cbwu {
  d: path("M15.5 9.5 13 12h2.5L13 14.5");
}

.y1z1czbul {
  fill: currentColor;
  d: path("M15.5 4H19a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V8l4 -4h3.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="y1z1czbul"/><path class="iymet_cml"/><path class="vc5bmsqzd"/><path class="uhawluh-v"/><path class="w41b5cbwu"/></g>`,
		"fallback": "iconmind:adversarial-input-duotone-thin",
	});
}

export default Component;
