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
		"content": `<style>.l35crxbri {
  d: path("m12.34 6.99l2.82 4.02l.34.49v9.75h-7V11.5l.34-.49l2.82-4.02l.34-.49zM12 6.5V2.75M10.75 4h2.5M2.75 21.25L8.5 17m12.75 4.25L15.5 17");
}

.t-akn4k8t {
  d: path("M10.75 16.5v-3h2.5v3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="l35crxbri"/><path class="t-akn4k8t"/></g>`,
		"fallback": "iconoven:church-steeple-sharp",
	});
}

export default Component;
