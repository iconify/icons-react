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
		"content": `<style>.d_xvzabhc {
  d: path("M3 18.5L7.5 14l3.5 3.5l2-2l3 3m1.75-14.75l.75 1.75l1.75.75L18.5 7l-.75 1.75L17 7l-1.75-.75L17 5.5Z");
}

.f5phcibgw {
  d: path("M3 8.5h13V21H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f5phcibgw"/><path class="d_xvzabhc"/></g>`,
		"fallback": "uix-sharp:ai-image",
	});
}

export default Component;
