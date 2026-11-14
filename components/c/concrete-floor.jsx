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
		"content": `<style>.au6vfqbsr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.761 4.5h6.478a1.75 1.75 0 0 1 1.66 1.197l3.833 11.5a1.75 1.75 0 0 1-1.66 2.303H4.928a1.75 1.75 0 0 1-1.66-2.303l3.833-11.5A1.75 1.75 0 0 1 8.761 4.5m-3.261 6h13m-6.5 0v9");
}
</style><path class="au6vfqbsr"/>`,
		"fallback": "uix:concrete-floor",
	});
}

export default Component;
