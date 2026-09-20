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
		"content": `<style>.fvt2-0orr {
  d: path("M12 4v8m-4 0 8 -8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u4sowhi7h {
  d: path("M4 16h16");
}

.xslfg2evh {
  d: path("M6 21h12");
}
</style><g class="s0phu2bbs"><path class="fvt2-0orr"/><path class="u4sowhi7h"/><path class="xslfg2evh"/></g>`,
		"fallback": "iconmind:cold-snap-outline-bold",
	});
}

export default Component;
