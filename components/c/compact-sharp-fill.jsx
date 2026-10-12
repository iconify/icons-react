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
		"content": `<style>.v7xwzmy8j {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 4L20 4L20 17M17 20L4 20L4 7M7 10L17 10M7 14L15 14");
}
</style><path class="v7xwzmy8j"/>`,
		"fallback": "keyline-icons:compact-sharp-fill",
	});
}

export default Component;
