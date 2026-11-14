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
		"content": `<style>.qj591t_mk {
  d: path("M12 21.5H3.5v-19H15v12.9M6.75 6.5h.5m4 0h.5m-5 4h.5m4 0h.5m-5 4h.5m4 0h.5");
}

.tf-b6mb8c {
  d: path("M7.75 21.5V18h3v3.5m3.75-1.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm3-1.25l3.75-3.75m-1.5 1.5l1.5 1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qj591t_mk"/><path class="tf-b6mb8c"/></g>`,
		"fallback": "uix-sharp:apartment-stay",
	});
}

export default Component;
