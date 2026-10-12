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
		"content": `<style>.nu2okfyeh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 7L21 7M17 3L21 7L17 11M21 17L3 17M7 21L3 17L7 13");
}
</style><path class="nu2okfyeh"/>`,
		"fallback": "keyline-icons:arrow-right-left",
	});
}

export default Component;
