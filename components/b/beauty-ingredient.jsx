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
		"content": `<style>.dx8ezjeyu {
  d: path("M9.5 2.5v6L4.25 19q-.75 2 1.5 2h12.5q2.25 0 1.5-2L14.5 8.5v-6M8 2.5h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xun427pfg {
  d: path("M9.5 18.25Q9.5 14 14 14q0 4.25-4.5 4.25Z");
}
</style><g class="ulnmmdpxh"><path class="dx8ezjeyu"/><path class="xun427pfg"/></g>`,
		"fallback": "uix-sharp:beauty-ingredient",
	});
}

export default Component;
