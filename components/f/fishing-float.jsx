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
		"content": `<style>.psusbkerw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 7.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0M12 12v9.5M2.5 15q2.375-1.5 4.75 0T12 15t4.75 0t4.75 0m-14-7.5h9");
}
</style><path class="psusbkerw"/>`,
		"fallback": "uix:fishing-float",
	});
}

export default Component;
