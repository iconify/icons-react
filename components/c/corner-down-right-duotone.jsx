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
		"content": `<style>.e-kfcpbuv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16 20L22 14L16 8M22 14L6 14C3.7909 14 2 12.2091 2 10L2 4");
}
</style><path class="e-kfcpbuv"/>`,
		"fallback": "keyline-icons:corner-down-right-duotone",
	});
}

export default Component;
