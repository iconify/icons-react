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

.j_lyr1ori {
  d: path("m6 21 6 -6 6 6Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sxlwlmkmh {
  d: path("M4 12h16");
}

.ujwj70gna {
  fill: currentColor;
  d: path("m6 3 6 6 6 -6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.vjij4k2la {
  fill: currentColor;
  d: path("m6 21 6 -6 6 6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="ujwj70gna"/><path class="vjij4k2la"/><path class="g2i9ptb4h"/><path class="sxlwlmkmh"/><path class="j_lyr1ori"/></g>`,
		"fallback": "iconmind:flip-v-duotone-bold",
	});
}

export default Component;
