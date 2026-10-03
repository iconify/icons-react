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
		"content": `<style>.o7g_5_9ji {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1.9999 7.0001L8 12L1.9999 16.9999L1.9999 7.0001ZM22.0001 7.0001L16.0001 12L22.0001 16.9999L22.0001 7.0001ZM12 1L12 5M12 7L12 11M12 13L12 17M12 19L12 23");
}
</style><path class="o7g_5_9ji"/>`,
		"fallback": "keyline-icons:flip-horizontal-sharp",
	});
}

export default Component;
