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
		"content": `<style>.vu4lewevp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3L19 10l-6.75 2.25L10 19.5Zm11.25 18.25l6.5-6.5m-5.75.75h.01m4.99 5h.01");
}
</style><path class="vu4lewevp"/>`,
		"fallback": "uix-sharp:click-rate",
	});
}

export default Component;
