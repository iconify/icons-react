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
		"content": `<style>.a61o8mk_m {
  d: path("m12 7.75l1.176 2.882l3.104.227l-2.378 2.009l.743 3.023L12 14.25l-2.645 1.641l.743-3.023l-2.378-2.009l3.104-.227Z");
}

.ucq6oswxi {
  d: path("M4.5 5h15a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4V7a2 2 0 0 1 2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ucq6oswxi"/><path class="a61o8mk_m"/></g>`,
		"fallback": "uix-sharp:battle-pass",
	});
}

export default Component;
