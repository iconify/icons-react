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
		"content": `<style>.dx5s6zbrc {
  d: path("M8 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.fjkvr_hpp {
  d: path("M4.5 9.26a8 8 0 0 1 15.04 0");
}

.rw2bbzrvf {
  d: path("M19.5 14.74a8 8 0 0 1 -15.04 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="dx5s6zbrc"/><path class="rw2bbzrvf"/><path class="fjkvr_hpp"/></g>`,
		"fallback": "iconmind:blur-outline-bold",
	});
}

export default Component;
