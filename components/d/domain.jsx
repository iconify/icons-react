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
		"content": `<style>.fr2hlabvi {
  d: path("M5.25 9.25h13.5A2.75 2.75 0 0 1 21.5 12a2.75 2.75 0 0 1-2.75 2.75H5.25A2.75 2.75 0 0 1 2.5 12a2.75 2.75 0 0 1 2.75-2.75m3.75 0C9 6 10.25 4.25 12 3c1.75 1.25 3 3 3 6.25m-6 5.5c0 3.25 1.25 5 3 6.25c1.75-1.25 3-3 3-6.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j7qjn6psg {
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0");
}
</style><g class="hntgybcog"><path class="j7qjn6psg"/><path class="fr2hlabvi"/></g>`,
		"fallback": "uix:domain",
	});
}

export default Component;
