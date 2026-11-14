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
		"content": `<style>.a8jl66-gv {
  d: path("M10.75 10a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0M12 3v14m-7-7h14M7 5l10 10m0-10L7 15");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o5rcvac5s {
  d: path("M5 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0");
}

.v4gve_jid {
  d: path("m8 21l4-11l4 11");
}
</style><g class="hntgybcog"><path class="o5rcvac5s"/><path class="a8jl66-gv"/><path class="v4gve_jid"/></g>`,
		"fallback": "uix:ferris-wheel",
	});
}

export default Component;
