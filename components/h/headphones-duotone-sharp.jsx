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
		"content": `<style>.blebsvbka {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M8 12v7H3v-7Zm13 0v7h-5v-7Z");
}

.ft5dv1b6b {
  fill: none;
}

.t6gfjibgj {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 12a7 7 0 0 1 14 0M3 12h5v7H3Zm13 0h5v7h-5Z");
}
</style><g class="ft5dv1b6b"><path class="blebsvbka"/><path class="t6gfjibgj"/></g>`,
		"fallback": "coolicons:headphones-duotone-sharp",
	});
}

export default Component;
