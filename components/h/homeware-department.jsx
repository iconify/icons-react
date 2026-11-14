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
		"content": `<style>.n_331fboj {
  d: path("M4 5.5h12v12a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4ZM16 9h1.5a3 3 0 0 1 0 6H16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uymdj-zll {
  d: path("m10 9.5l3 2.5v4H7v-4Zm0 6.5v-2.25");
}
</style><g class="ulnmmdpxh"><path class="n_331fboj"/><path class="uymdj-zll"/></g>`,
		"fallback": "uix-sharp:homeware-department",
	});
}

export default Component;
