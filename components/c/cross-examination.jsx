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
		"content": `<style>.rkgzv7lec {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4h4a2 2 0 0 1 2 2v10l-3-3h-3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm15 4h-4a2 2 0 0 0-2 2v10l3-3h3a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2Z");
}
</style><path class="rkgzv7lec"/>`,
		"fallback": "uix-sharp:cross-examination",
	});
}

export default Component;
