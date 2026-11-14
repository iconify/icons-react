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
		"content": `<style>.cw42627ol {
  d: path("M7.5 3h9l-3.75 6.25l3.75 6.25h-9l3.75-6.25Zm-5 18.5v-2h2v-2h2v-2h11v2h2v2h2v2Z");
}

.rd8cf6bdb {
  fill: currentColor;
  d: path("m9.5 15.5l2.5-3l2.5 3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cw42627ol"/><path class="rd8cf6bdb"/></g>`,
		"fallback": "uix-sharp:era-hourglass",
	});
}

export default Component;
