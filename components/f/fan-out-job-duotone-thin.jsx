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
		"content": `<style>.cn7hoepxw {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7 12h3l3 -3h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.f0erpifmh {
  d: path("M7 12h3l3 -3h3");
}

.gscgthrgv {
  d: path("m10 12 3 3h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ri2m-q_tv {
  d: path("M4 3v18M4 6h16M4 18h16m0 -15v18");
}

.sznyy028z {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m10 12 3 3h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vws5wpblq {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 3v18M4 6h16M4 18h16m0 -15v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="vws5wpblq"/><path class="cn7hoepxw"/><path class="sznyy028z"/><path class="ri2m-q_tv"/><path class="f0erpifmh"/><path class="gscgthrgv"/></g>`,
		"fallback": "iconmind:fan-out-job-duotone-thin",
	});
}

export default Component;
