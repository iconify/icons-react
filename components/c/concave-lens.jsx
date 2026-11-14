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
		"content": `<style>.krhzphbze {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3.5h6q-3 8.5 0 17H4q3-8.5 0-17M12.5 9L20 5.5M12.5 15l7.5 3.5");
}
</style><path class="krhzphbze"/>`,
		"fallback": "uix:concave-lens",
	});
}

export default Component;
