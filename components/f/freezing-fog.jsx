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
		"content": `<style>.opdrslbqu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4h17m-19 5h17m-15 5h8m5.5.75v6.5m-2.75-5l5.5 3.5m-5.5 0l5.5-3.5");
}
</style><path class="opdrslbqu"/>`,
		"fallback": "uix:freezing-fog",
	});
}

export default Component;
