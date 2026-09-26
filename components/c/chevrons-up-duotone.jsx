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
		"content": `<style>.h1bs0-k7p {
  d: path("M7 18L12 13L17 18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tpfu2-g_m {
  stroke-opacity: 0.4;
  d: path("M7 11L12 6L17 11");
}
</style><g class="nrj6p8qat"><path class="tpfu2-g_m"/><path class="h1bs0-k7p"/></g>`,
		"fallback": "keyline-icons:chevrons-up-duotone",
	});
}

export default Component;
