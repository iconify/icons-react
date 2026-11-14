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
		"content": `<style>.op4vu5bde {
  d: path("m12 2.25l2.135 1.781l2.74-.475l.959 2.61l2.61.959l-.475 2.74L21.75 12l-1.781 2.135l.475 2.74l-2.61.959l-.959 2.61l-2.74-.475L12 21.75l-2.135-1.781l-2.74.475l-.959-2.61l-2.61-.959l.475-2.74L2.25 12l1.781-2.135l-.475-2.74l2.61-.959l.959-2.61l2.74.475Z");
}

.ud-8d1vne {
  d: path("M9 15.5v-7l6 7v-7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="op4vu5bde"/><path class="ud-8d1vne"/></g>`,
		"fallback": "uix-sharp:badge-new",
	});
}

export default Component;
