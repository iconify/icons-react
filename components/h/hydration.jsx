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
		"content": `<style>.ha2csfbah {
  d: path("M8.5 14.5A3.5 3.5 0 0 0 12 18");
}

.ic7n19bbn {
  d: path("M12 2.75S5 10 5 14.5a7 7 0 0 0 14 0c0-4.5-7-11.75-7-11.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ic7n19bbn"/><path class="ha2csfbah"/></g>`,
		"fallback": "uix-sharp:hydration",
	});
}

export default Component;
