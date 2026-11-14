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
		"content": `<style>.jbiapog4f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 3h12.5A1.75 1.75 0 0 1 20 4.75a1.75 1.75 0 0 1-1.75 1.75H5.75A1.75 1.75 0 0 1 4 4.75A1.75 1.75 0 0 1 5.75 3M9 6.5V16m6-9.5V16m-7.25 0h8.5a1.25 1.25 0 0 1 1.25 1.25a1.25 1.25 0 0 1-1.25 1.25h-8.5a1.25 1.25 0 0 1-1.25-1.25A1.25 1.25 0 0 1 7.75 16M3 21.5h18m-9-12V13");
}
</style><path class="jbiapog4f"/>`,
		"fallback": "uix:column-classical",
	});
}

export default Component;
