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
		"content": `<style>.xautnixoy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 12c0-1.5 2-1.5 2 .5c0 2.5-3.5 3-4.5.5c-1.5-3.5 2.5-6 6-4.5c4 2 3.5 8.5-1.5 10.5c-5.5 2-10.5-2.5-10-7.5s5-8 9-8");
}
</style><path class="xautnixoy"/>`,
		"fallback": "uix-sharp:chart-spiral",
	});
}

export default Component;
