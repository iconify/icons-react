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
		"content": `<style>.v4xj07b2p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 6V17.5C6 17.77614 6.22386 18 6.5 18H18M7.2 16.8L18 6");
}
</style><path class="v4xj07b2p"/>`,
		"fallback": "keyline-icons:arrow-down-left-fill",
	});
}

export default Component;
