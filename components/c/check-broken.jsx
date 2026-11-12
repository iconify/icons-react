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
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uome7fb7d {
  d: path("M16.5 9.5L19 7");
}

.xfi3j1flh {
  stroke-linejoin: round;
  d: path("M14 12L9 17L5 13");
}
</style><g class="ipq1z-bjh"><path class="xfi3j1flh"/><path class="uome7fb7d"/></g>`,
		"fallback": "solar:check-broken",
	});
}

export default Component;
