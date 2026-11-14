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
		"content": `<style>.qmm8fqb3n {
  d: path("M3 9a3 3 0 0 0 6 0a3 3 0 0 0 6 0a3 3 0 0 0 6 0M9 4v5m6-5v5m-5 11.5V15h4v5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wzgazbcgh {
  d: path("m3 9l1.5-5h15L21 9M4.5 11.5v9h15v-9");
}
</style><g class="ulnmmdpxh"><path class="wzgazbcgh"/><path class="qmm8fqb3n"/></g>`,
		"fallback": "uix-sharp:camp-store",
	});
}

export default Component;
