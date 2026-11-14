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
		"content": `<style>.m_xx-h3uy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 15V7a2.5 2.5 0 0 1 5 0v8a3.75 3.75 0 1 1-5 0M12 9.5v8.25");
}
</style><path class="m_xx-h3uy"/>`,
		"fallback": "uix:baby-thermometer",
	});
}

export default Component;
