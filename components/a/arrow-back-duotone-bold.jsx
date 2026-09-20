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
		"content": `<style>.ebvczzbhc {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 12h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mjzirhbfl {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m10 6 -6 6 6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
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

.zuykpur_s {
  d: path("m10 6 -6 6 6 6");
}
</style><g class="s0phu2bbs"><path class="ebvczzbhc"/><path class="mjzirhbfl"/><path class="sxlwlmkmh"/><path class="zuykpur_s"/></g>`,
		"fallback": "iconmind:arrow-back-duotone-bold",
	});
}

export default Component;
