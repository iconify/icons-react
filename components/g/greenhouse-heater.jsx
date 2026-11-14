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
		"content": `<style>.uoc391bym {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.316 19.5H2.5V9l8-6.5l6.358 5.166m.699.567L18.5 9v.284M2.5 9h13.9m1.8 0h.3m-8 0v10.5M18 13c1.5 1.75 3 3.25 3 5.5a3 3 0 0 1-6 0c0-1.25.5-2 1.25-2.75c0 1 .5 1.75 1 2c0-1.75.25-3.25.75-4.75Z");
}
</style><path class="uoc391bym"/>`,
		"fallback": "uix-sharp:greenhouse-heater",
	});
}

export default Component;
