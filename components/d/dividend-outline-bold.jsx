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
		"content": `<style>.lp4aq-bgr {
  d: path("M14 18a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.o-4bk_b4n {
  d: path("M7 8a5 5 0 1 0 10 0A5 5 0 1 0 7 8");
}

.oej_05bgt {
  d: path("M4 18a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="o-4bk_b4n"/><path class="oej_05bgt"/><path class="lp4aq-bgr"/></g>`,
		"fallback": "iconmind:dividend-outline-bold",
	});
}

export default Component;
