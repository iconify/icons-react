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
		"content": `<style>.b05mdwtqh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M8 19a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-.5-6L20 10.25m-9 6.25l2.75-12.75M16.5 2.5c2.5 1 1 3.5 5 4");
}
</style><path class="b05mdwtqh"/>`,
		"fallback": "uix:hair-cut",
	});
}

export default Component;
