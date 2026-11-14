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
		"content": `<style>.cn9lfwb1r {
  d: path("M2.5 3H12v6H2.5ZM12 15h9.5v6H12ZM7.25 9v9H12");
}

.p_dm2tzcb {
  d: path("m10 16l2 2l-2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cn9lfwb1r"/><path class="p_dm2tzcb"/></g>`,
		"fallback": "uix-sharp:dependency",
	});
}

export default Component;
