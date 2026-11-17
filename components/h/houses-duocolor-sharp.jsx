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
		"content": `<style>.k7r0nwxsh {
  stroke-opacity: 0.4;
  d: path("M9 9.875V3h12v18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x-vbgcb2x {
  d: path("M13 21h8m-8 0H3v-7.625L8 9l5 4.375zm0-14h.01M17 7h.01M17 11h.01M17 15h.01");
}
</style><g class="nrj6p8qat"><path class="k7r0nwxsh"/><path class="x-vbgcb2x"/></g>`,
		"fallback": "coolicons:houses-duocolor-sharp",
	});
}

export default Component;
