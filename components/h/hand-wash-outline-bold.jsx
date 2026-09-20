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
		"content": `<style>.ehnvkinxp {
  d: path("M7 4v4");
}

.i2-ny_bzf {
  d: path("M12 3v4");
}

.mqbr2yyal {
  d: path("M19 21v-6a2 2 0 0 0 -4 0");
}

.rsinobb0c {
  d: path("M17 4v4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.znimqt98n {
  d: path("M5 21v-6a2 2 0 0 1 4 0v-3a2 2 0 0 1 4 0v4");
}
</style><g class="s0phu2bbs"><path class="znimqt98n"/><path class="mqbr2yyal"/><path class="ehnvkinxp"/><path class="i2-ny_bzf"/><path class="rsinobb0c"/></g>`,
		"fallback": "iconmind:hand-wash-outline-bold",
	});
}

export default Component;
