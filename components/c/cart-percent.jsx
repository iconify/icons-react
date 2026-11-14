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
		"content": `<style>.ohmm7ghkt {
  d: path("M5.25 7H20.5l-1.25 5.25h-7V15H7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ze699mtfq {
  d: path("M2.5 3.5h2L7 15m0 4a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm8.5 1.5l5-5m-4.75.25h.01m4.49 4.5h.01");
}
</style><g class="ulnmmdpxh"><path class="ohmm7ghkt"/><path class="ze699mtfq"/></g>`,
		"fallback": "uix-sharp:cart-percent",
	});
}

export default Component;
