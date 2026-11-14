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
		"content": `<style>.vutoc1s5a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.5 6.5l-5 5.5l5 5.5m9-11l5 5.5l-5 5.5m-3-13l-3 15");
}
</style><path class="vutoc1s5a"/>`,
		"fallback": "uix:code-xml",
	});
}

export default Component;
