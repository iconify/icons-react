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
		"content": `<style>.b4wchacbk {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 3H22M4 3V21H20V3M12 3V21M8 3V10M16 3V10");
}
</style><path class="b4wchacbk"/>`,
		"fallback": "keyline-icons:curtains-sharp",
	});
}

export default Component;
