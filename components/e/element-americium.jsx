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
		"content": `<style>.f8iztobqm {
  d: path("M8 9.25h8v5.5H8ZM9 18h6");
}

.j1-ukck7n {
  d: path("M3.5 3h17v18h-17Zm3 3.5h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j1-ukck7n"/><path class="f8iztobqm"/></g>`,
		"fallback": "uix-sharp:element-americium",
	});
}

export default Component;
