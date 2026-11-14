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
		"content": `<style>.axgjabb6n {
  d: path("M8.75 20.5V8L12 3l3.25 5v12.5M8.75 15L4.5 9.5l-1.75 3.75L5.5 20.5m9.75-5.5l4.25-5.5l1.75 3.75l-2.75 7.25m-15 0h17");
}

.gz8vocb7r {
  d: path("M8.75 8L12 10l3.25-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="axgjabb6n"/><path class="gz8vocb7r"/></g>`,
		"fallback": "uix-sharp:amethyst-cluster",
	});
}

export default Component;
