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
		"content": `<style>.cqnexabvb {
  d: path("M4 8h13");
}

.ea3ekee5h {
  d: path("M17 5.5 19.5 8 17 10.5");
}

.o-lyxcngp {
  d: path("M7 16h13");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s6wepcb6n {
  d: path("M7 13.5 4.5 16 7 18.5");
}
</style><g class="s0phu2bbs"><path class="cqnexabvb"/><path class="ea3ekee5h"/><path class="o-lyxcngp"/><path class="s6wepcb6n"/></g>`,
		"fallback": "iconmind:compensate-outline-bold",
	});
}

export default Component;
