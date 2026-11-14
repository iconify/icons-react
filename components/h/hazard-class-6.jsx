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
		"content": `<style>.fx7tzoasv {
  d: path("M8.75 11.5V9.75a3.25 3.25 0 0 1 6.5 0v1.75a1 1 0 0 1-1 1h-4.5a1 1 0 0 1-1-1Zm2-1.5h.01m2.49 0h.01M9.5 14.25l5 2.5m0-2.5l-5 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yh3o8-b_d {
  d: path("M12 2.25L21.75 12L12 21.75L2.25 12Z");
}
</style><g class="ulnmmdpxh"><path class="yh3o8-b_d"/><path class="fx7tzoasv"/></g>`,
		"fallback": "uix-sharp:hazard-class-6",
	});
}

export default Component;
