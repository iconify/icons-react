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
		"content": `<style>.hsobnkbit {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.7236 15.5528L8 11L22 11L19.0753 20L2 20L2 4L8 4L10 6L19 6L19 12");
}
</style><path class="hsobnkbit"/>`,
		"fallback": "keyline-icons:folder-open-sharp",
	});
}

export default Component;
