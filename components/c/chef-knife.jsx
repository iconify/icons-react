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
		"content": `<style>.vrkncb27j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.75 12.5l9.5-9.5c1 4.5.5 8-2.5 11L13 16.75Zm2.048 2.202za1.5 1.5 0 0 1 0 2.121l-2.475 2.475a1.5 1.5 0 0 1-2.121 0a1.5 1.5 0 0 1 0-2.121l2.475-2.475a1.5 1.5 0 0 1 2.121 0");
}
</style><path class="vrkncb27j"/>`,
		"fallback": "uix:chef-knife",
	});
}

export default Component;
