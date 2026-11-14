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
		"content": `<style>.pd0y6swib {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.25 15a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm5-6a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm5 6a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm5-6a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM6 13.25l2-2.5m3 0l2 2.5m3 0l2-2.5");
}
</style><path class="pd0y6swib"/>`,
		"fallback": "uix-sharp:hydrocarbon",
	});
}

export default Component;
