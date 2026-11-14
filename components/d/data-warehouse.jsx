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
		"content": `<style>.cu6umjb_n {
  d: path("M7.5 12h9v8.5h-9Zm0 2.75h9m-9 2.75h9");
}

.gqzuiqmoh {
  d: path("m3.5 9.5l8.5-5l8.5 5v11h-17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gqzuiqmoh"/><path class="cu6umjb_n"/></g>`,
		"fallback": "uix-sharp:data-warehouse",
	});
}

export default Component;
