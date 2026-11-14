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
		"content": `<style>.ugfij3n4d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.53 7.754l4.526 8.146a1.75 1.75 0 0 1-1.53 2.6H7.474a1.75 1.75 0 0 1-1.53-2.6l4.526-8.146a1.75 1.75 0 0 1 3.06 0M12 10.25v2.5m0 3h.01M3 8.75a9.5 9.5 0 0 0 0 6.5m18-6.5a9.5 9.5 0 0 1 0 6.5");
}
</style><path class="ugfij3n4d"/>`,
		"fallback": "uix:cell-broadcast-alert",
	});
}

export default Component;
