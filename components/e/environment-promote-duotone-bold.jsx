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
		"content": `<style>.b7mhs2bzu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 9v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hqoi59sxr {
  d: path("M12 9v7");
}

.km9uii_ku {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 3v18M4 6h16M4 18h16m0 -15v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rfcx07u_a {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9.5 11.5 12 9l2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
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

.y5493mbgk {
  d: path("M9.5 11.5 12 9l2.5 2.5");
}
</style><g class="s0phu2bbs"><path class="km9uii_ku"/><path class="b7mhs2bzu"/><path class="rfcx07u_a"/><path class="ri2m-q_tv"/><path class="hqoi59sxr"/><path class="y5493mbgk"/></g>`,
		"fallback": "iconmind:environment-promote-duotone-bold",
	});
}

export default Component;
