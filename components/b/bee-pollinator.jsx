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
		"content": `<style>.hcbm6_4fj {
  d: path("M3.5 12a4.5 3.5 0 1 0 9 0a4.5 3.5 0 1 0-9 0Zm3.25-3.25v6.5m2.75-6.5v6.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yu5j_aclq {
  d: path("M9.5 8.75c-2.5-1-4.5-4-2.5-5.5c1.5-1 3 2 2.5 5.5c2-3.5 3.5-6 5-5c1.5 1.5-2 4-5 5m6 3.25l1.5 1.75L18.5 12l1.5 1.75L21.5 12v3a3 3 0 0 1-6 0Zm3 6v3.5");
}
</style><g class="ulnmmdpxh"><path class="hcbm6_4fj"/><path class="yu5j_aclq"/></g>`,
		"fallback": "uix-sharp:bee-pollinator",
	});
}

export default Component;
