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
		"content": `<style>.l0r7vlbov {
  cx: 12px;
  cy: 7.25px;
  r: 4.5px;
}

.v7uj6_b2g {
  d: path("M7.35 14.75h9.9l-.47.37l-2.81 2.26l-.47.37v2l-.42.42l-.66.66l-.42.42l-.42-.42l-.66-.66l-.42-.42v-2l-.47-.37l-2.81-2.26l-.47-.37z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="l0r7vlbov"/><path class="v7uj6_b2g"/></g>`,
		"fallback": "iconoven:golf-tee-sharp",
	});
}

export default Component;
