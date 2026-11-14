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
		"content": `<style>.c4jmp2bxe {
  d: path("M9.5 11a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM9 17h6");
}

.n-ivfjbhs {
  d: path("M6 5.25h12v16H6ZM6 2.5h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n-ivfjbhs"/><path class="c4jmp2bxe"/></g>`,
		"fallback": "uix-sharp:artboard-poster",
	});
}

export default Component;
