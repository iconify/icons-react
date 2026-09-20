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
		"content": `<style>.aj1uncbqw {
  d: path("M4 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.o8gbebbcq {
  d: path("M20.6 17.86a6 6 0 1 1 0 -7.72");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t6kisabuh {
  fill: currentColor;
  d: path("M4 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="t6kisabuh"/><path class="aj1uncbqw"/><path class="o8gbebbcq"/></g>`,
		"fallback": "iconmind:degree-celsius-duotone-bold",
	});
}

export default Component;
