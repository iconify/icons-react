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
		"content": `<style>.q1w70m00b {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 12L7 2L17 2L17 12M2 12L22 12L22 22L2 22L2 12ZM12 12L12 22");
}
</style><path class="q1w70m00b"/>`,
		"fallback": "keyline-icons:blocks-2-sharp",
	});
}

export default Component;
