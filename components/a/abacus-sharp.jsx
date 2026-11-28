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
		"content": `<style>.r00d68pci {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 2L5 21M19 2L19 21M2 21L22 21M5 8L19 8M5 15L19 15M9 5.5L9 10.5M13 5.5L13 10.5M11 12.5L11 17.5M15 12.5L15 17.5");
}
</style><path class="r00d68pci"/>`,
		"fallback": "keyline-icons:abacus-sharp",
	});
}

export default Component;
