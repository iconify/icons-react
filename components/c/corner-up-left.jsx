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
		"content": `<style>.bfv9hiq9m {
  d: path("M19.5 19.5V13A3.5 3.5 0 0 0 16 9.5H4.5");
}

.fs1q8-dbp {
  d: path("m9.5 4.5l-5 5l5 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bfv9hiq9m"/><path class="fs1q8-dbp"/></g>`,
		"fallback": "uix-sharp:corner-up-left",
	});
}

export default Component;
