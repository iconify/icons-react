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
		"content": `<style>.q2e1w5byl {
  d: path("M2.5 3.5h19V8h-19ZM4 8v11a2.5 2.5 0 0 0 2.5 2.5h11A2.5 2.5 0 0 0 20 19V8m-8 10.5v-7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vj06a7bup {
  d: path("m9.5 14l2.5-2.5l2.5 2.5");
}
</style><g class="ulnmmdpxh"><path class="q2e1w5byl"/><path class="vj06a7bup"/></g>`,
		"fallback": "uix-sharp:archive-restore",
	});
}

export default Component;
