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
		"content": `<style>.iav-iqbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5c3.25 2.25 3.75 5.5 3.25 7c-.75 2-5.75 2-6.5 0c-.5-1.5 0-4.75 3.25-7M2.5 17C5 13.75 8 13.25 9.25 13.75c1.75.75 1.75 5.75 0 6.5C8 20.75 5 20.25 2.5 17m19 0c-2.5-3.25-5.5-3.75-6.75-3.25c-1.75.75-1.75 5.75 0 6.5c1.25.5 4.25 0 6.75-3.25M12 5.5v3.25");
}
</style><path class="iav-iqbkq"/>`,
		"fallback": "uix:almonds",
	});
}

export default Component;
