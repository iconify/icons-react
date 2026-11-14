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
		"content": `<style>.acib1losd {
  d: path("m6.5 17l4-3.5l3 2l6-10M6 10h2.5m2.5 0h2.5m6.5 0h1.5");
}

.fffd9ib1u {
  d: path("M3 3v17.5h18.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fffd9ib1u"/><path class="acib1losd"/></g>`,
		"fallback": "uix-sharp:alerting",
	});
}

export default Component;
