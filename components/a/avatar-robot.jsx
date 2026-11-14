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
		"content": `<style>.cv_y6978o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 7.5h12a1 1 0 0 1 1 1V19a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8.5a1 1 0 0 1 1-1Zm6-4v4M2.25 12v3.5m19.5-3.5v3.5M9 12.5h.01m5.99 0h.01m-5.01 4h4");
}
</style><path class="cv_y6978o"/>`,
		"fallback": "uix-sharp:avatar-robot",
	});
}

export default Component;
