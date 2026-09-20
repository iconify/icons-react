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
		"content": `<style>.e3dlplb2a {
  d: path("M10.5 9H8v6h2.5");
}

.g45hqpb0s {
  d: path("M10.5 12h3");
}

.gyrsppg8d {
  d: path("M13.5 9H16v6h-2.5");
}

.km9uii_ku {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 3v18M4 6h16M4 18h16m0 -15v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.l_hx63kbe {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M10.5 12h3");
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

.t2zw3bhhu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M10.5 9H8v6h2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xoyh883xd {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M13.5 9H16v6h-2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="km9uii_ku"/><path class="t2zw3bhhu"/><path class="xoyh883xd"/><path class="l_hx63kbe"/><path class="ri2m-q_tv"/><path class="e3dlplb2a"/><path class="gyrsppg8d"/><path class="g45hqpb0s"/></g>`,
		"fallback": "iconmind:deploy-window-duotone-bold",
	});
}

export default Component;
