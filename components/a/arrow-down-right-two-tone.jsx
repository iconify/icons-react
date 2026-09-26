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
		"content": `<style>.vhvv3ymup {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 18H17.5C17.77614 18 18 17.77614 18 17.5V6M6 6L16.8 16.8");
}
</style><path class="vhvv3ymup"/>`,
		"fallback": "keyline-icons:arrow-down-right-two-tone",
	});
}

export default Component;
