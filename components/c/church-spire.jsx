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
		"content": `<style>.imh7vgi-c {
  d: path("M10.5 21v-4.5h3V21");
}

.n7fh31b2x {
  d: path("M6 21v-9h12v9M8 12l4-7.5l4 7.5m-4-7.5v-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n7fh31b2x"/><path class="imh7vgi-c"/></g>`,
		"fallback": "uix-sharp:church-spire",
	});
}

export default Component;
