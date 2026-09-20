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
		"content": `<style>.mqnae981n {
  d: path("m9 11 3 3 3 -3");
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.z35tx4bdc {
  d: path("m3 6 4 -4 4 4 4 -4 4 4");
}
</style><g class="s0phu2bbs"><path class="z35tx4bdc"/><path class="mqnae981n"/><path class="oifr9zbpt"/></g>`,
		"fallback": "iconmind:denoise-outline-bold",
	});
}

export default Component;
