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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l1y6mk20t {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m14 10 -4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lxtc-wp5b {
  d: path("m10 10 4 4");
}

.qhea8zb8b {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m10 10 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ri2m-q_tv {
  d: path("M4 3v18M4 6h16M4 18h16m0 -15v18");
}

.s-cqkabbd {
  d: path("m14 10 -4 4");
}

.vws5wpblq {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 3v18M4 6h16M4 18h16m0 -15v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="vws5wpblq"/><path class="qhea8zb8b"/><path class="l1y6mk20t"/><path class="ri2m-q_tv"/><path class="lxtc-wp5b"/><path class="s-cqkabbd"/></g>`,
		"fallback": "iconmind:deploy-reject-duotone-thin",
	});
}

export default Component;
