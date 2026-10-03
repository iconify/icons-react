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
		"content": `<style>.n4hho1bmk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 6L3 6M6 3L3 6L6 9M3 18L21 18M18 15L21 18L18 21");
}
</style><path class="n4hho1bmk"/>`,
		"fallback": "keyline-icons:arrow-left-right",
	});
}

export default Component;
