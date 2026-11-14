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
		"content": `<style>.at14y5b2n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 4.5h.01m-.01 4h.01m-.01 4V20m6.25-6.25L12 20l-6.25-6.25");
}
</style><path class="at14y5b2n"/>`,
		"fallback": "uix:arrow-down-dashed",
	});
}

export default Component;
