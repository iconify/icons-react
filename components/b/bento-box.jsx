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
		"content": `<style>.b0u_mqqba {
  d: path("M5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.tmt_v_bid {
  d: path("M3 5h18v14H3Zm9 0v14m0-7h9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tmt_v_bid"/><path class="b0u_mqqba"/></g>`,
		"fallback": "uix-sharp:bento-box",
	});
}

export default Component;
