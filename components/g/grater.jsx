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
		"content": `<style>.ynhitxx-b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3.5h8l3 17H5ZM10 9h.01M14 9h.01M8.5 14h.01M12 14h.01m3.49 0h.01");
}
</style><path class="ynhitxx-b"/>`,
		"fallback": "uix:grater",
	});
}

export default Component;
