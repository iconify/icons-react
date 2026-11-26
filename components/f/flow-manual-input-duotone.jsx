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
		"content": `<style>.mfgojhwrr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4.2992 8.4476L18.2992 5.0844C20.1859 4.6311 22 6.061 22 8.0014L22 16C22 17.6569 20.6569 19 19 19L5 19C3.3431 19 2 17.6569 2 16L2 11.3647C2 9.9777 2.9507 8.7716 4.2992 8.4476Z");
}
</style><path class="mfgojhwrr"/>`,
		"fallback": "keyline-icons:flow-manual-input-duotone",
	});
}

export default Component;
