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
		"content": `<style>.b7w3gdcmq {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 3.25h5.75l1.1.58l2.05 1.09l1.1.58l.13 1.24l1.24 12.02l.13 1.24l-1.22.26l-1.06.23q-1.22.26-2.47.26h-9q-1.25 0-2.47-.26l-1.06-.23L2.75 20l.13-1.24L4.12 6.74l.13-1.24l1.1-.58L7.4 3.83l1.1-.58z");
}

.qs-y-_biw {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 16.5h.01");
}

.rcxt2vbbq {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 3.5L8 7.25l1.5.5L12 13.5l2.5-5.75l1.5-.5l-.75-3.75m-.5 12.75h2.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="b7w3gdcmq"/><path class="rcxt2vbbq"/><path class="qs-y-_biw"/></g>`,
		"fallback": "iconoven:blazer-sharp",
	});
}

export default Component;
