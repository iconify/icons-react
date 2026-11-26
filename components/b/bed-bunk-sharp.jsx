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
		"content": `<style>.v_w9t6bzp {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 5L9 5L9 9M3 13L9 13L9 17M16 13L21 13M3 22L3 17L3 15L3 13L3 9L3 7L3 5L3 2M21 9L16 9L9 9L3 9M21 17L16 17L9 17L3 17M16 22L16 21L16 20L16 17L16 13L16 9M21 2L21 5L21 9L21 13L21 17L21 22");
}
</style><path class="v_w9t6bzp"/>`,
		"fallback": "keyline-icons:bed-bunk-sharp",
	});
}

export default Component;
