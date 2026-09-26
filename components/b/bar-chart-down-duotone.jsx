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
		"content": `<style>.j-8wz9b1s {
  stroke-opacity: 0.4;
  d: path("M4 2L4 15M12 2L12 22");
}

.ml9xssolm {
  d: path("M20 2L20 8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="j-8wz9b1s"/><path class="ml9xssolm"/></g>`,
		"fallback": "keyline-icons:bar-chart-down-duotone",
	});
}

export default Component;
