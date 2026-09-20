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

.o41x62nfc {
  d: path("M4 6v12h16V6Z");
}

.sxlwlmkmh {
  d: path("M4 12h16");
}

.t56w4f31r {
  d: path("M6 20.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.z4g4wjbvf {
  d: path("M6 3h6");
}

.zbeuuub3n {
  d: path("M16 20.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="hntgybcog"><path class="o41x62nfc"/><path class="sxlwlmkmh"/><path class="t56w4f31r"/><path class="zbeuuub3n"/><path class="z4g4wjbvf"/></g>`,
		"fallback": "iconmind:housekeeping-outline-thin",
	});
}

export default Component;
