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
		"content": `<style>.hjr3_vbwo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 17V6c0-2 1-3.25 2.5-3.5c1.5.25 2.5 1.5 2.5 3.5v11Zm0-4.5l-4.5 9m9.5-9l4.5 9M12 17v4.5m-9 0h18");
}
</style><path class="hjr3_vbwo"/>`,
		"fallback": "uix:booster-landing",
	});
}

export default Component;
