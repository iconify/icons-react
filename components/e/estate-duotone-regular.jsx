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
		"content": `<style>.epa177bui {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M13.5 12v8h7v-8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gnfa25bop {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m12 12 5 -5 5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.i2y9aacrj {
  d: path("m12 12 5 -5 5 5");
}

.jalxicbwq {
  d: path("M3.5 12v8h7v-8");
}

.jllte9bnc {
  d: path("M13.5 12v8h7v-8");
}

.jlulcvbpb {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3.5 12v8h7v-8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rht8hbbnv {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m2 12 5 -5 5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ws-a642hy {
  d: path("m2 12 5 -5 5 5");
}
</style><g class="nrj6p8qat"><path class="rht8hbbnv"/><path class="jlulcvbpb"/><path class="gnfa25bop"/><path class="epa177bui"/><path class="ws-a642hy"/><path class="jalxicbwq"/><path class="i2y9aacrj"/><path class="jllte9bnc"/></g>`,
		"fallback": "iconmind:estate-duotone-regular",
	});
}

export default Component;
