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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.srugpnb9t {
  stroke-opacity: 0.4;
  d: path("M6 7h12");
}

.v2vk_nezw {
  d: path("m18 17l-6-6l-6 6");
}
</style><g class="nrj6p8qat"><path class="srugpnb9t"/><path class="v2vk_nezw"/></g>`,
		"fallback": "coolicons:chevron-up-to-line-duocolor-round",
	});
}

export default Component;
