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
		"content": `<style>.jbo442noy {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15.37 6.22h.01m1.75 3.06h.01");
}

.jxil-gbwl {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.17 10.51l4.93-.87q2.46-.43 2.89 2.03l.87 4.93q.43 2.46-2.03 2.89l-4.93.87q-2.46.43-2.89-2.03l-.87-4.93q-.43-2.46 2.03-2.89");
}

.y2njm-dyb {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.89 13.17h.01M8.5 15h.01m2.6 1.83h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.za3ykxbmz {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.29 3.61l3.86 1.04q1.69.45 1.24 2.14l-1.04 3.86q-.45 1.69-2.14 1.24l-3.86-1.04q-1.69-.45-1.24-2.14l1.04-3.86q.45-1.69 2.14-1.24");
}
</style><g class="y9tr6bcfx"><path class="za3ykxbmz"/><path class="jbo442noy"/><path class="jxil-gbwl"/><path class="y2njm-dyb"/></g>`,
		"fallback": "iconoven:dice-pair",
	});
}

export default Component;
