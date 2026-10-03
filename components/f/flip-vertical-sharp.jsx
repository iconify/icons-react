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
		"content": `<style>.e-sdc7buc {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16.9999 1.9999L12 8L7.0001 1.9999L16.9999 1.9999ZM16.9999 22.0001L12 16.0001L7.0001 22.0001L16.9999 22.0001ZM23 12L19 12M17 12L13 12M11 12L7 12M5 12L1 12");
}
</style><path class="e-sdc7buc"/>`,
		"fallback": "keyline-icons:flip-vertical-sharp",
	});
}

export default Component;
