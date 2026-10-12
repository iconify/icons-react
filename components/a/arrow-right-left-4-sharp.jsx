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
		"content": `<style>.cgbacrb7d {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 8L21 8L16.7071 3.7071M22 16L3 16L7.2929 20.2929");
}
</style><path class="cgbacrb7d"/>`,
		"fallback": "keyline-icons:arrow-right-left-4-sharp",
	});
}

export default Component;
