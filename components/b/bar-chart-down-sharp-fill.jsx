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
		"content": `<style>.p2n4w53sl {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 1L4 16M12 1L12 23M20 1L20 9");
}
</style><path class="p2n4w53sl"/>`,
		"fallback": "keyline-icons:bar-chart-down-sharp-fill",
	});
}

export default Component;
