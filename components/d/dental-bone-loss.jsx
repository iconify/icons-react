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
		"content": `<style>.vlaj5sbdt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.476 17.595l.774-3.095C15 12 16.5 10.5 16.5 7c0-5.5-5-5-7-3c-2-2-7-2.5-7 3c0 3.5 1.5 5 2.25 7.5l1 4c.25 1 1.5 1 1.75 0l1-4.5c.25-1 1.75-1 2 0l1 4.5c.199.797 1.034.959 1.491.485M19 14.5V21m-2.5-2.5L19 21l2.5-2.5");
}
</style><path class="vlaj5sbdt"/>`,
		"fallback": "uix-sharp:dental-bone-loss",
	});
}

export default Component;
