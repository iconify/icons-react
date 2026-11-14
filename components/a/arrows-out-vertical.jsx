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
		"content": `<style>.tq_e6icdc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 12h.01M12 8.5v-6m3 3l-3-3l-3 3m3 10v6m3-3l-3 3l-3-3");
}
</style><path class="tq_e6icdc"/>`,
		"fallback": "uix:arrows-out-vertical",
	});
}

export default Component;
