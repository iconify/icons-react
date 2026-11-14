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
		"content": `<style>.c3ylkqbpf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 11h7v10.5h-7ZM12 2.5c1.75 2 2.5 3.25 2.5 4.5c0 1.4-1.1 2.25-2.5 2.25S9.5 8.4 9.5 7c0-1.25.75-2.5 2.5-4.5Zm0 6.75V11M5 21.5h14");
}
</style><path class="c3ylkqbpf"/>`,
		"fallback": "uix-sharp:hospital-chapel",
	});
}

export default Component;
