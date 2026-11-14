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
		"content": `<style>.au9xcgb6o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5c5.5 0 7 3.5 7 7.5c0 5.5-3 11.5-7 11.5s-7-6-7-11.5c0-4 1.5-7.5 7-7.5m-7 8h14M5.75 15h12.5M12 10.5v11");
}
</style><path class="au9xcgb6o"/>`,
		"fallback": "uix:hockey-goalie",
	});
}

export default Component;
