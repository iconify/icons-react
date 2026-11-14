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
		"content": `<style>.c0o0965kz {
  d: path("M13 10v3l2.25 1.25m-9.144 5.644A9.75 9.75 0 0 1 9.665 3.838");
}

.pern93c_v {
  d: path("M5.75 17.5V20h-2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vqvs9rw1m {
  d: path("M6.5 13a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Z");
}
</style><g class="ulnmmdpxh"><path class="vqvs9rw1m"/><path class="c0o0965kz"/><path class="pern93c_v"/></g>`,
		"fallback": "uix-sharp:history-clock",
	});
}

export default Component;
