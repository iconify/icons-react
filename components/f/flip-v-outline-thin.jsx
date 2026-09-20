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
		"content": `<style>.g2i9ptb4h {
  d: path("m6 3 6 6 6 -6Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j_lyr1ori {
  d: path("m6 21 6 -6 6 6Z");
}

.sxlwlmkmh {
  d: path("M4 12h16");
}
</style><g class="hntgybcog"><path class="g2i9ptb4h"/><path class="sxlwlmkmh"/><path class="j_lyr1ori"/></g>`,
		"fallback": "iconmind:flip-v-outline-thin",
	});
}

export default Component;
