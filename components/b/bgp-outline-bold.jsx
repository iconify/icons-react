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

.fadcahsis {
  d: path("M18 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.gvmyg7bww {
  d: path("M2 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.jyj967m8y {
  d: path("m18 7 -3 3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.y9-dv_b3q {
  d: path("m6 7 3 3");
}

.yhbbndf5c {
  d: path("M2 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="enrpg0aoq"/><path class="gvmyg7bww"/><path class="fadcahsis"/><path class="yhbbndf5c"/><path class="y9-dv_b3q"/><path class="jyj967m8y"/></g>`,
		"fallback": "iconmind:bgp-outline-bold",
	});
}

export default Component;
