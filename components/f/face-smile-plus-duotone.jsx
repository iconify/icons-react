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
		"content": `<style>.djhz9ejxf {
  d: path("M19 2L19 8M16 5L22 5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ysm547b_y {
  stroke-opacity: 0.4;
  d: path("M22 12C22 17.5228 17.5228 22 12 22C6.4772 22 2 17.5228 2 12C2 6.4772 6.4772 2 12 2M9 10L9 11M15 10L15 11M9 15C10 16 11 16.5 12 16.5C13 16.5 14 16 15 15");
}
</style><g class="nrj6p8qat"><path class="ysm547b_y"/><path class="djhz9ejxf"/></g>`,
		"fallback": "keyline-icons:face-smile-plus-duotone",
	});
}

export default Component;
