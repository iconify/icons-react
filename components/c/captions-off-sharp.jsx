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
		"content": `<style>.q8g0dibeh {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 20L2 20L2 4L4 4M8.6569 4L22 4L22 17.3431M10 10C9.5673 9.6754 9.0409 9.5 8.5 9.5C7.1193 9.5 6 10.6193 6 12C6 13.3807 7.1193 14.5 8.5 14.5C9.0409 14.5 9.5673 14.3246 10 14L10.8 13.4M1.7071 1.7071L22.2929 22.2929");
}
</style><path class="q8g0dibeh"/>`,
		"fallback": "keyline-icons:captions-off-sharp",
	});
}

export default Component;
