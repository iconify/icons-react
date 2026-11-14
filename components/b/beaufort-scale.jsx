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
		"content": `<style>.op3bpbcys {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5v17M6.5 7H12a1.5 1.5 0 1 0-1.5-1.5m-4 7.5H16a1.5 1.5 0 1 0-1.5-1.5m-8 7.5h13a1.5 1.5 0 1 0-1.5-1.5");
}
</style><path class="op3bpbcys"/>`,
		"fallback": "uix:beaufort-scale",
	});
}

export default Component;
