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
		"content": `<style>.gdwffccdr {
  d: path("M8 10.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm4 4v6m-3.5 0h7");
}

.mxsqcubiu {
  d: path("M8.25 16.995a7.5 7.5 0 1 1 7.5 0M8 10.5h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gdwffccdr"/><path class="mxsqcubiu"/></g>`,
		"fallback": "uix-sharp:ambisonic-mic",
	});
}

export default Component;
