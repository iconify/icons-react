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
		"content": `<style>.df095h88a {
  d: path("M2.5 17.5v-3q0-2 2-2h6c.5-7.5 11-8 11 2v3m-19 0h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wr3-6wb6k {
  d: path("M13 17.5v-2.25a2.75 2.75 0 0 1 5.5 0v2.25");
}
</style><g class="ulnmmdpxh"><path class="df095h88a"/><path class="wr3-6wb6k"/></g>`,
		"fallback": "uix-sharp:bivouac",
	});
}

export default Component;
