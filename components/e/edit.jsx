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
		"content": `<style>.jis8zhbnz {
  d: path("M11 4.5H7A2.5 2.5 0 0 0 4.5 7v10A2.5 2.5 0 0 0 7 19.5h10a2.5 2.5 0 0 0 2.5-2.5v-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yw5fvx21r {
  d: path("m17.657 3.515l2.828 2.828L12 14.828l-3.536.708L9.172 12ZM15.182 5.99l2.828 2.828");
}
</style><g class="ulnmmdpxh"><path class="jis8zhbnz"/><path class="yw5fvx21r"/></g>`,
		"fallback": "uix-sharp:edit",
	});
}

export default Component;
