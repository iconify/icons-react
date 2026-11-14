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
		"content": `<style>.myyloqj8t {
  d: path("M7.75 7h8.5L12 14.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v6v_iycni {
  d: path("M2.5 4h19L12 20.5Z");
}
</style><g class="ulnmmdpxh"><path class="v6v_iycni"/><path class="myyloqj8t"/></g>`,
		"fallback": "uix-sharp:give-way",
	});
}

export default Component;
