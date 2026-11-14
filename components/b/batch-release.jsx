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
		"content": `<style>.rnfdpvb6d {
  d: path("M8.5 14.5L11 17l4.5-4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ztbpqmbtt {
  d: path("M3 3h18v5H3Zm1.5 5v11.5a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8");
}
</style><g class="ulnmmdpxh"><path class="ztbpqmbtt"/><path class="rnfdpvb6d"/></g>`,
		"fallback": "uix-sharp:batch-release",
	});
}

export default Component;
