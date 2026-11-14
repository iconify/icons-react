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
		"content": `<style>.adgv6acea {
  d: path("M9 7.5C5 10 3.5 15 4.5 19.5q.5 2 2.5 2h10q2 0 2.5-2c1-4.5-.5-9.5-4.5-12m-6 0L7 3h10l-2 4.5m-7 0h8");
}

.o5kzzybqi {
  d: path("M7.5 12h9v4.5h-9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="adgv6acea"/><path class="o5kzzybqi"/></g>`,
		"fallback": "uix-sharp:fertiliser-bag",
	});
}

export default Component;
