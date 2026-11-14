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
		"content": `<style>.rc1w4o-1k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 6.5h2a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5h-2A5.5 5.5 0 0 1 5.5 12A5.5 5.5 0 0 1 11 6.5M2.5 12h3m13 0h3m-19-2.5v5m19-5v5");
}
</style><path class="rc1w4o-1k"/>`,
		"fallback": "uix:catalytic-converter",
	});
}

export default Component;
