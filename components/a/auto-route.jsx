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
		"content": `<style>.kaq-ldbwr {
  d: path("M2.5 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4 0H10c2.5 0 3.5-5.5 6-5.5h4.5M10 12c2.5 0 3.5 5.5 6 5.5h4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xl1zzdo6s {
  d: path("m18 4l2.5 2.5L18 9m0 6l2.5 2.5L18 20");
}
</style><g class="ulnmmdpxh"><path class="kaq-ldbwr"/><path class="xl1zzdo6s"/></g>`,
		"fallback": "uix-sharp:auto-route",
	});
}

export default Component;
