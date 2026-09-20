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
		"content": `<style>.f85w9tbee {
  d: path("m10 9 -3 3 3 3");
}

.n09nomjwg {
  d: path("M15 6h3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V9a3 3 0 0 1 3 -3h3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.z--eqpb8i {
  d: path("m14 9 3 3 -3 3");
}
</style><g class="s0phu2bbs"><path class="n09nomjwg"/><path class="f85w9tbee"/><path class="z--eqpb8i"/></g>`,
		"fallback": "iconmind:api-outline-bold",
	});
}

export default Component;
