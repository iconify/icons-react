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
		"content": `<style>.flq2w3bwj {
  d: path("m9.5 9.5 5 5");
}

.k5f0ncbhf {
  d: path("m14.5 9.5 -5 5");
}

.k6nj2fbya {
  d: path("M3 5h18");
}

.rkhcgsbdl {
  d: path("M3 19h18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="k6nj2fbya"/><path class="rkhcgsbdl"/><path class="flq2w3bwj"/><path class="k5f0ncbhf"/></g>`,
		"fallback": "iconmind:cross-attention-outline-bold",
	});
}

export default Component;
