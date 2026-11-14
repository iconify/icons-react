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
		"content": `<style>.mfgh4vbse {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 9a4.5 4.5 0 0 1 9 0M12 2.5v2M3 9h18M3 21h9.25M6 12v6m4-6v6m8 3.5c-1.4-1.25-3-2.75-3-4.5a3 3 0 0 1 6 0c0 1.75-1.6 3.25-3 4.5");
}
</style><path class="mfgh4vbse"/>`,
		"fallback": "uix:government-building-pin",
	});
}

export default Component;
