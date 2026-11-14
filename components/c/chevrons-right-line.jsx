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
		"content": `<style>.euky03sgk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M19.5 5v14m-9-12.5L16 12l-5.5 5.5m-6-11L10 12l-5.5 5.5");
}
</style><path class="euky03sgk"/>`,
		"fallback": "uix:chevrons-right-line",
	});
}

export default Component;
