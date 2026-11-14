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
		"content": `<style>.nf_g40q2z {
  d: path("m3.25 9l2.5-1.5C6 4.5 10 4 11 7c4 .5 6 3.5 4.5 6.5c-1.5 2.5-6.5 2.5-8-1C7 11 6.5 10 5.75 10Z");
}

.p2vtc2b4z {
  d: path("M15.25 13.75C18.5 14.5 21 17.5 20.5 21M8.25 5l-.5-2m.5 4.75h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nf_g40q2z"/><path class="p2vtc2b4z"/></g>`,
		"fallback": "uix-sharp:bird-of-paradise",
	});
}

export default Component;
