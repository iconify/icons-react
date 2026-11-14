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
		"content": `<style>.fn0yytq2a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 12h.01M8.5 12h-6m3-3l-3 3l3 3m10-3h6m-3-3l3 3l-3 3M12 8.5v-6m3 3l-3-3l-3 3m3 10v6m3-3l-3 3l-3-3");
}
</style><path class="fn0yytq2a"/>`,
		"fallback": "uix:arrows-out-cardinal",
	});
}

export default Component;
