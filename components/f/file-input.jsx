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
		"content": `<style>.f349fbb5e {
  d: path("m8.5 12l2.5 2.5L8.5 17m5-14.5v4a2 2 0 0 0 2 2h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vxrvvmb6c {
  d: path("M4.5 11.5V5A2.5 2.5 0 0 1 7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19v-1.5m-2-3H11");
}
</style><g class="ulnmmdpxh"><path class="vxrvvmb6c"/><path class="f349fbb5e"/></g>`,
		"fallback": "uix-sharp:file-input",
	});
}

export default Component;
