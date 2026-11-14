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
		"content": `<style>.sywx7vbek {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.5V8m0 11c-2.5 0-4-2-4-4.5c2.5 0 4 2 4 4.5m0-5.5c-2.5 0-4-2-4-4.5c2.5 0 4 2 4 4.5m0 5.5c2.5 0 4-2 4-4.5c-2.5 0-4 2-4 4.5m0-5.5c2.5 0 4-2 4-4.5c-2.5 0-4 2-4 4.5M12 8c-1.25-1.5-1.25-3.5 0-5c1.25 1.5 1.25 3.5 0 5M8 9L5 3.5M16 9l3-5.5m-11 11l-4.5-5m12.5 5l4.5-5");
}
</style><path class="sywx7vbek"/>`,
		"fallback": "uix:barley-ear",
	});
}

export default Component;
