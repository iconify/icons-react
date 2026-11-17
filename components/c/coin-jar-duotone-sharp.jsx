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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.it78n3bnl {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 12v2l-2 2v5h12v-5l-2-2v-2m-9 0h10M6 5a2 2 0 1 0 4 0a2 2 0 0 0-4 0m7 2a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}

.mao-byv8w {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 5a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 5m7 2a2 2 0 1 1 3.999-.001A2 2 0 0 1 13 7m-5 5h8v2l2 2v5H6v-5l2-2Z");
}
</style><g class="ft5dv1b6b"><path class="mao-byv8w"/><path class="it78n3bnl"/></g>`,
		"fallback": "coolicons:coin-jar-duotone-sharp",
	});
}

export default Component;
