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
		"content": `<style>.er_yirbnr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.5h6A3.5 3.5 0 0 1 18.5 6v12a3.5 3.5 0 0 1-3.5 3.5H9A3.5 3.5 0 0 1 5.5 18V6A3.5 3.5 0 0 1 9 2.5m-3.5 4h13M12 10.25v8m-3.5-6l7 4m-7 0l7-4");
}
</style><path class="er_yirbnr"/>`,
		"fallback": "uix:freezer-minus-80",
	});
}

export default Component;
