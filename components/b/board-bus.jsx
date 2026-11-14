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
		"content": `<style>.i2kdy6buc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5h15V19h-15Zm3 16.5v2.5m9-2.5v2.5m-12-11h15m-5 0V19M8 15h.01");
}
</style><path class="i2kdy6buc"/>`,
		"fallback": "uix-sharp:board-bus",
	});
}

export default Component;
