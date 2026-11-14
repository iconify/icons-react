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
		"content": `<style>.ippa1kbnm {
  d: path("m12 6.5l1 2.75l3 .25l-2.25 1.75l.75 3L12 12.5l-2.5 1.75l.75-3L8 9.5l3-.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wgd-kf7my {
  d: path("M5 3.5h14A2.5 2.5 0 0 1 21.5 6v9a2.5 2.5 0 0 1-2.5 2.5h-9L5.5 21v-3.5H5A2.5 2.5 0 0 1 2.5 15V6A2.5 2.5 0 0 1 5 3.5Z");
}
</style><g class="ulnmmdpxh"><path class="wgd-kf7my"/><path class="ippa1kbnm"/></g>`,
		"fallback": "uix-sharp:citizen-feedback",
	});
}

export default Component;
