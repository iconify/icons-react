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
		"content": `<style>.enrpg0aoq {
  d: path("M9 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.gls0jcb3n {
  d: path("m16 6 -2.5 2.5");
}

.j7s4o3bav {
  d: path("m9 15 2.5 2.5");
}

.jkuojibnm {
  d: path("M3 20h18");
}

.ka0_g35wl {
  d: path("m8 6 2.5 2.5");
}

.mg7aqnbsf {
  d: path("M3 4h18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="enrpg0aoq"/><path class="mg7aqnbsf"/><path class="jkuojibnm"/><path class="ka0_g35wl"/><path class="gls0jcb3n"/><path class="j7s4o3bav"/></g>`,
		"fallback": "iconmind:alpn-outline-bold",
	});
}

export default Component;
