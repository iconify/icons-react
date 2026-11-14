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
		"content": `<style>.q8n9pubdc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 7.5c-1-3-3.5-4.5-3.75-2.75C8 6.25 10.5 7.5 12 7.5m0 0c1-3 3.5-4.5 3.75-2.75C16 6.25 13.5 7.5 12 7.5m-4 0h8A1.5 1.5 0 0 1 17.5 9a1.5 1.5 0 0 1-1.5 1.5H8A1.5 1.5 0 0 1 6.5 9A1.5 1.5 0 0 1 8 7.5m-.5 3v5m9-5v5m-4.5-5v5m-8 0h16a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 17A1.5 1.5 0 0 1 4 15.5m1 3v3m14-3v3");
}
</style><path class="q8n9pubdc"/>`,
		"fallback": "uix:gift-wrap-station",
	});
}

export default Component;
