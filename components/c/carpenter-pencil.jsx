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
		"content": `<style>.mw58uovga {
  d: path("M7.05 12L12 16.95l-5.303 2.475l-2.122-2.122Zm-.707 4.243l1.414 1.414");
}

.p2nu_ybuq {
  d: path("m16.243 2.808l4.949 4.949L12 16.95L7.05 12Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p2nu_ybuq"/><path class="mw58uovga"/></g>`,
		"fallback": "uix-sharp:carpenter-pencil",
	});
}

export default Component;
