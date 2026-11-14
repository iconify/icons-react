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
		"content": `<style>.g3wsk-qnq {
  d: path("m8 11l2 .25l-.75 2");
}

.u8rz5ub6c {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4M12 10.75a3.75 3.75 0 0 1 1.875 6.998");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uwivq1yig {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5Z");
}

.vc3-a0w7k {
  d: path("m16 18l-2-.25l.75-2M12 18.25a3.75 3.75 0 0 1-1.875-6.998");
}
</style><g class="ulnmmdpxh"><path class="uwivq1yig"/><path class="u8rz5ub6c"/><path class="vc3-a0w7k"/><path class="g3wsk-qnq"/></g>`,
		"fallback": "uix-sharp:file-sync",
	});
}

export default Component;
