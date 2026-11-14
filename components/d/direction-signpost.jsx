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
		"content": `<style>.jh4oyrbou {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v19M12 4h6l2.5 2.5L18 9h-6m0 2.5H6L3.5 14L6 16.5h6");
}
</style><path class="jh4oyrbou"/>`,
		"fallback": "uix:direction-signpost",
	});
}

export default Component;
