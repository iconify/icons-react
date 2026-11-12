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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.eexiasg0q {
  d: path("M4 2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2");
}

.qvvaxwgmr {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m10.342 9.06l11 4a1.002 1.002 0 0 1 .029 1.868l-4.602 1.841l-1.841 4.602a1 1 0 0 1-1.868-.029l-4-11a1 1 0 0 1 1.282-1.282");
}
</style><g class="cuyn6tgcc"><path class="qvvaxwgmr"/><path class="eexiasg0q"/></g>`,
		"fallback": "coolicons:cursor-square-bulk",
	});
}

export default Component;
