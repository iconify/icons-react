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
		"content": `<style>.xyg7y2edn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4h17L14 10.5v8l-4 2v-10Zm2.75 2.75h11.5M8.5 9h7");
}
</style><path class="xyg7y2edn"/>`,
		"fallback": "uix:funnel-stage",
	});
}

export default Component;
