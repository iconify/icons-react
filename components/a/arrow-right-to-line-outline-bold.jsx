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
		"content": `<style>.egsaq3b2f {
  d: path("m12 8 4 4 -4 4");
}

.jka0cfj-k {
  d: path("M4 12h12");
}

.mhila7bcl {
  d: path("M20 7v10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="mhila7bcl"/><path class="jka0cfj-k"/><path class="egsaq3b2f"/></g>`,
		"fallback": "iconmind:arrow-right-to-line-outline-bold",
	});
}

export default Component;
