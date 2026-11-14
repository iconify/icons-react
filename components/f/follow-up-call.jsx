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
		"content": `<style>.ud_p19b2q {
  d: path("M5 4h3l1.75 4.25l-2 1.5a10 10 0 0 0 6 6l1.5-2l4.25 1.75V18a2 2 0 0 1-2 2a15 15 0 0 1-15-13.5A2.5 2.5 0 0 1 5 4Zm15.5 7.5v-3A2.5 2.5 0 0 0 18 6h-5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wg_8_-b4l {
  d: path("m15 4l-2 2l2 2");
}
</style><g class="ulnmmdpxh"><path class="ud_p19b2q"/><path class="wg_8_-b4l"/></g>`,
		"fallback": "uix-sharp:follow-up-call",
	});
}

export default Component;
