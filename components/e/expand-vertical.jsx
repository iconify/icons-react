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
		"content": `<style>.x5x-bfb_w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 2L19 2M5 22L19 22M12 6L12 18M9 9L12 6L15 9M9 15L12 18L15 15");
}
</style><path class="x5x-bfb_w"/>`,
		"fallback": "keyline-icons:expand-vertical",
	});
}

export default Component;
