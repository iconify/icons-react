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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jtrgh1bsz {
  d: path("m11.885 7.879l-2.827 3.727A.869.869 0 0 0 9.75 13a1.448 1.448 0 0 1 1.423 1.719l-.173.906a.627.627 0 0 0 1.115.496l2.827-3.727A.869.869 0 0 0 14.25 11a1.448 1.448 0 0 1-1.423-1.719L13 8.375a.627.627 0 0 0-1.115-.496");
}

.pm-67_bax {
  d: path("M2.5 12a9.5 8 0 1 0 19 0a9.5 8 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="pm-67_bax"/><path class="jtrgh1bsz"/></g>`,
		"fallback": "uix:cell-energy",
	});
}

export default Component;
