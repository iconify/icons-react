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
		"content": `<style>.crv4i00bu {
  d: path("M4 3v18");
}

.g1xwr4cnp {
  d: path("M4 14h15");
}

.je5qtm2zh {
  d: path("M4 10h17");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t2ilqxxwv {
  d: path("M4 18h8");
}

.wwb_9fbub {
  d: path("M4 6h12");
}
</style><g class="s0phu2bbs"><path class="crv4i00bu"/><path class="wwb_9fbub"/><path class="je5qtm2zh"/><path class="g1xwr4cnp"/><path class="t2ilqxxwv"/></g>`,
		"fallback": "iconmind:index-bloat-outline-bold",
	});
}

export default Component;
