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
		"content": `<style>.ze6_fbbgq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 4.5zA2.5 2.5 0 0 1 14.5 7v10a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 17V7A2.5 2.5 0 0 1 12 4.5M2.5 12h7m5 0h7");
}
</style><path class="ze6_fbbgq"/>`,
		"fallback": "uix:ab-wheel",
	});
}

export default Component;
