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
		"content": `<style>.ae-e09b3w {
  d: path("M3 12h18");
}

.d26wznbgp {
  d: path("M13 12 7 6");
}

.r3snlms8q {
  d: path("m5 12 -2 2");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vblyu6b4h {
  d: path("m5 12 -2 -2");
}

.wm3q5wbwg {
  d: path("m13 12 -6 6");
}
</style><g class="s0phu2bbs"><path class="ae-e09b3w"/><path class="d26wznbgp"/><path class="wm3q5wbwg"/><path class="vblyu6b4h"/><path class="r3snlms8q"/></g>`,
		"fallback": "iconmind:air-freight-outline-bold",
	});
}

export default Component;
