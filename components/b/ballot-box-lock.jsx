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
		"content": `<style>.inp71jb9r {
  d: path("m9.25 7l1.25 1.25l2-2.25M15 17.5h6v4h-6Zm1.5 0v-1a1.5 1.5 0 0 1 3 0v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z7_mzwdyt {
  d: path("M12.2 20.5H2.5V10H19v2.3M7.5 10V3.5H14V10");
}
</style><g class="ulnmmdpxh"><path class="z7_mzwdyt"/><path class="inp71jb9r"/></g>`,
		"fallback": "uix-sharp:ballot-box-lock",
	});
}

export default Component;
