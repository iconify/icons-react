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
		"content": `<style>.xi2ds4tlw {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M22 12L14 20L14 16L6 16L6 8L14 8L14 4ZM2 7L2 17");
}
</style><path class="xi2ds4tlw"/>`,
		"fallback": "keyline-icons:arrow-big-right-dash-sharp-two-tone",
	});
}

export default Component;
