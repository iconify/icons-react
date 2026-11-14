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
		"content": `<style>.tpaqxzb4z {
  d: path("M17.5 11c-1.5-2.5-5-2.5-6.5 0c1.5 2.5 5 2.5 6.5 0ZM11 11L9.5 9.5M11 11l-1.5 1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ya_svtbtz {
  d: path("M3 20.5v-8a9 9 0 0 1 18 0v8Zm0-8l5 2m-5 6l5-3.25");
}
</style><g class="ulnmmdpxh"><path class="ya_svtbtz"/><path class="tpaqxzb4z"/></g>`,
		"fallback": "uix-sharp:fish-trap",
	});
}

export default Component;
