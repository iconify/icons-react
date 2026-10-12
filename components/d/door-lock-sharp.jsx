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
		"content": `<style>.ack-1vw1a {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.75 13.5h6.5v7.75h-6.5zm1.75 0v-3h3v3");
}

.ktc02ox-l {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.75 12h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.z7k3ah_pl {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h9.5v18.5h-9.5z");
}
</style><g class="ux2u0rbkq"><path class="z7k3ah_pl"/><path class="ktc02ox-l"/><path class="ack-1vw1a"/></g>`,
		"fallback": "iconoven:door-lock-sharp",
	});
}

export default Component;
