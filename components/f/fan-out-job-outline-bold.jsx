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
		"content": `<style>.f0erpifmh {
  d: path("M7 12h3l3 -3h3");
}

.gscgthrgv {
  d: path("m10 12 3 3h3");
}

.ri2m-q_tv {
  d: path("M4 3v18M4 6h16M4 18h16m0 -15v18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="ri2m-q_tv"/><path class="f0erpifmh"/><path class="gscgthrgv"/></g>`,
		"fallback": "iconmind:fan-out-job-outline-bold",
	});
}

export default Component;
