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
		"content": `<style>.wux6ejk_b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 5C20 6.6569 16.4183 8 12 8C7.5817 8 4 6.6569 4 5C4 3.3431 7.5817 2 12 2C16.4183 2 20 3.3431 20 5ZM4 5L4 19M20 5L20 19M20 19C20 20.6569 16.4183 22 12 22C7.5817 22 4 20.6569 4 19");
}
</style><path class="wux6ejk_b"/>`,
		"fallback": "keyline-icons:cylinder",
	});
}

export default Component;
