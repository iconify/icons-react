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
		"content": `<style>.axcf-wb4p {
  stroke-opacity: 0.4;
  d: path("m2 2l20 20");
}

.b-1gkojdj {
  d: path("m18 19l-2 1a8.94 8.94 0 0 1-8 0l-5 1l1-5a8.94 8.94 0 0 1 0-8l1-2m5-3a9.22 9.22 0 0 1 11 11");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="axcf-wb4p"/><path class="b-1gkojdj"/></g>`,
		"fallback": "coolicons:chat-circle-off-duocolor-round",
	});
}

export default Component;
