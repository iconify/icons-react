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

.seqns1bli {
  d: path("M9.5 13v4H13");
}

.t7-0ur16m {
  d: path("M14 2.5v5h5m-11 4a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m5 5.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.vp3_m3b5w {
  d: path("M14 2.5H7a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-12Z");
}
</style><g class="hntgybcog"><path class="vp3_m3b5w"/><path class="t7-0ur16m"/><path class="seqns1bli"/></g>`,
		"fallback": "uix:content-plan",
	});
}

export default Component;
