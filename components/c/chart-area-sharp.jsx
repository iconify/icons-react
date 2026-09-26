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
		"content": `<style>.vfvuhvbmc {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 2L3 21L22 21M7 15L13 9L16 12L21 7L21 17L7 17L7 15Z");
}
</style><path class="vfvuhvbmc"/>`,
		"fallback": "keyline-icons:chart-area-sharp",
	});
}

export default Component;
