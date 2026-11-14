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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v_xzsccbw {
  d: path("M4 20V10h10v10Zm0-10l6-6h10v10l-6 6m0-10l6-6");
}

.vwqnabcex {
  fill: currentColor;
  d: path("M4 10h10v10H4Z");
}
</style><g class="ulnmmdpxh"><path class="v_xzsccbw"/><path class="vwqnabcex"/></g>`,
		"fallback": "uix-sharp:face-select",
	});
}

export default Component;
