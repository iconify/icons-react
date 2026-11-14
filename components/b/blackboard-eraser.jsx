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
		"content": `<style>.ofhd6zbqq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.524 9.464L14.74 5.018l2.736 7.518L5.26 16.982Zm1.71 4.699L16.45 9.717M15.5 19.5h.01M19 19h.01m.49-3.25h.01");
}
</style><path class="ofhd6zbqq"/>`,
		"fallback": "uix-sharp:blackboard-eraser",
	});
}

export default Component;
