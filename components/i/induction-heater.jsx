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
		"content": `<style>.b3ws9qbjj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 12a1.5 5.5 0 1 0 3 0a1.5 5.5 0 1 0-3 0Zm5 0a1.5 5.5 0 1 0 3 0a1.5 5.5 0 1 0-3 0Zm5 0a1.5 5.5 0 1 0 3 0a1.5 5.5 0 1 0-3 0Zm-13 0h19");
}
</style><path class="b3ws9qbjj"/>`,
		"fallback": "uix-sharp:induction-heater",
	});
}

export default Component;
