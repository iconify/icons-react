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
		"content": `<style>.gv3caxbxq {
  d: path("M5.5 10A1.25 5 0 1 0 8 10a1.25 5 0 1 0-2.5 0m5.25 0a1.25 5 0 1 0 2.5 0a1.25 5 0 1 0-2.5 0M16 10a1.25 5 0 1 0 2.5 0a1.25 5 0 1 0-2.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qehdn1bxs {
  d: path("M5.125 15h13.75a2.625 2.625 0 0 1 2.625 2.625v.25a2.625 2.625 0 0 1-2.625 2.625H5.125A2.625 2.625 0 0 1 2.5 17.875v-.25A2.625 2.625 0 0 1 5.125 15");
}
</style><g class="hntgybcog"><path class="qehdn1bxs"/><path class="gv3caxbxq"/></g>`,
		"fallback": "uix:dish-rack",
	});
}

export default Component;
