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
		"content": `<style>.a-768stfr {
  d: path("M8 15h13");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jkuojibnm {
  d: path("M3 20h18");
}

.k6nj2fbya {
  d: path("M3 5h18");
}

.rhp6fjekz {
  d: path("M8 10h13");
}
</style><g class="hntgybcog"><path class="k6nj2fbya"/><path class="rhp6fjekz"/><path class="a-768stfr"/><path class="jkuojibnm"/></g>`,
		"fallback": "iconmind:format-code-outline-thin",
	});
}

export default Component;
