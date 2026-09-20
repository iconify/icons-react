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
		"content": `<style>.cyx--v6br {
  d: path("M17 13v7");
}

.g0co-6h7h {
  d: path("M14 20h6");
}

.lo7kp72nh {
  d: path("M3 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.nnidkxr0z {
  d: path("M2 17a4 4 0 0 1 8 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wvg9bnb2c {
  d: path("M12 5a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="wvg9bnb2c"/><path class="cyx--v6br"/><path class="g0co-6h7h"/><path class="lo7kp72nh"/><path class="nnidkxr0z"/></g>`,
		"fallback": "iconmind:art-class-outline-bold",
	});
}

export default Component;
