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
		"content": `<style>.jm-84zbkz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10c4.5 3 14.5 3 19 0m-19 5c4.5 3 14.5 3 19 0M4 7.5V19m8-9.5V21m8-13.5V19");
}
</style><path class="jm-84zbkz"/>`,
		"fallback": "uix:corral",
	});
}

export default Component;
