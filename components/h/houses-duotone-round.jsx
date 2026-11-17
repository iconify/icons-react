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
		"content": `<style>.bywockbiu {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M13 21H3v-5.81a4 4 0 0 1 1.366-3.01l1.134-.992a3.795 3.795 0 0 1 5 0l1.134.992A4 4 0 0 1 13 15.19Z");
}

.ft5dv1b6b {
  fill: none;
}

.yd3n2y4se {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 21h8m-8 0H3v-5.81a4 4 0 0 1 1.366-3.01l1.134-.992a3.796 3.796 0 0 1 5 0l1.134.992A4 4 0 0 1 13 15.19zm0-14h.01M17 7h.01M17 11h.01M17 15h.01M9 9.875V3h8a4 4 0 0 1 4 4v14");
}
</style><g class="ft5dv1b6b"><path class="bywockbiu"/><path class="yd3n2y4se"/></g>`,
		"fallback": "coolicons:houses-duotone-round",
	});
}

export default Component;
