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
		"content": `<style>.a6k62accz {
  d: path("M18 16.5V18l1.25 1");
}

.nqgu0ibqx {
  d: path("M6.5 5.5h10V11h-10Zm0 9h5m-5 3.5H10m4.75 0a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v7ywxzb7i {
  d: path("M13.1 21.5H3.5v-19h16v9.6");
}
</style><g class="ulnmmdpxh"><path class="v7ywxzb7i"/><path class="nqgu0ibqx"/><path class="a6k62accz"/></g>`,
		"fallback": "uix-sharp:blog-post-clock",
	});
}

export default Component;
