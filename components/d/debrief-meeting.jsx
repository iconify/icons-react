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

.vtpgnebtv {
  d: path("M8.5 8V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2v2.5L17 13h-1.5M6 13l2 2l4-4");
}

.zgatq7pvz {
  d: path("M4.5 8h9a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-5l-4 3v-3a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Z");
}
</style><g class="ulnmmdpxh"><path class="zgatq7pvz"/><path class="vtpgnebtv"/></g>`,
		"fallback": "uix-sharp:debrief-meeting",
	});
}

export default Component;
