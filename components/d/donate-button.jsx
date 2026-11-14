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
		"content": `<style>.f0qw65x2c {
  d: path("M4.5 5.5h15a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z");
}

.mjgluubhs {
  d: path("m12 15.75l-3-3a2.12 2.12 0 0 1 3-3a2.12 2.12 0 0 1 3 3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f0qw65x2c"/><path class="mjgluubhs"/></g>`,
		"fallback": "uix-sharp:donate-button",
	});
}

export default Component;
