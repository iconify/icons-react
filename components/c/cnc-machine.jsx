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
		"content": `<style>.f_v9nzblm {
  d: path("M8 3h8v5.5H8Zm4 5.5v7m-4.5 0h9V21h-9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xgjlv1o0e {
  d: path("M4 21V3h16v18M2.5 21h19");
}
</style><g class="ulnmmdpxh"><path class="xgjlv1o0e"/><path class="f_v9nzblm"/></g>`,
		"fallback": "uix-sharp:cnc-machine",
	});
}

export default Component;
