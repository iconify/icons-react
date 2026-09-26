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
		"content": `<style>.moee6dvip {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 15L4 23M12 8L12 23M20 1L20 23");
}
</style><path class="moee6dvip"/>`,
		"fallback": "keyline-icons:bar-chart-2-sharp",
	});
}

export default Component;
