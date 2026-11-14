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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wl61jtfpr {
  d: path("M5.75 14v-1.5a1.5 1.5 0 0 1 3 0V14m1.75 0v-1.5a1.5 1.5 0 0 1 3 0V14m1.75 0v-1.5a1.5 1.5 0 0 1 3 0V14");
}

.zgnun8byb {
  d: path("M2.5 2.5h19v15h-19Zm9.5 15v4m-4.75-13h.01m4.74 0h.01m4.74 0h.01");
}
</style><g class="ulnmmdpxh"><path class="zgnun8byb"/><path class="wl61jtfpr"/></g>`,
		"fallback": "uix-sharp:assembly-point-sign",
	});
}

export default Component;
