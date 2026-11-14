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
		"content": `<style>.v7qukr6-v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 12h17M12 9V3.5m-4.5 4L12 3l4.5 4.5M12 15v5.5m-4.5-4L12 21l4.5-4.5");
}
</style><path class="v7qukr6-v"/>`,
		"fallback": "uix:expand-all",
	});
}

export default Component;
