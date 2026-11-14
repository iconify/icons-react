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

.ovssapbam {
  d: path("M6.5 7.5v-1a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2V15a2 2 0 0 1-2 2h-2M6 11h8m-8 3h8m-8 3h5");
}

.p2hjitbvp {
  d: path("M6 7.5h8a3.5 3.5 0 0 1 3.5 3.5v5.5A3.5 3.5 0 0 1 14 20H6a3.5 3.5 0 0 1-3.5-3.5V11A3.5 3.5 0 0 1 6 7.5");
}
</style><g class="hntgybcog"><path class="p2hjitbvp"/><path class="ovssapbam"/></g>`,
		"fallback": "uix:cue-cards",
	});
}

export default Component;
