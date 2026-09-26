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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.walbv2b5n {
  stroke-opacity: 0.4;
  d: path("M2 4V20M11 4V20M2 12H11");
}

.y8zdbi5ol {
  d: path("M16.75 15.1L19 13V20M16 20H22");
}
</style><g class="nrj6p8qat"><path class="walbv2b5n"/><path class="y8zdbi5ol"/></g>`,
		"fallback": "keyline-icons:heading-1-duotone",
	});
}

export default Component;
