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
		"content": `<style>.ch46ixtex {
  d: path("m18.25 21.5l-3-3a2 2 0 0 1 3-3a2 2 0 0 1 3 3Z");
}

.jxsforoir {
  d: path("M13.344 20.5H3.5v-10L12 3.25l8.5 7.25v1.656");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jxsforoir"/><path class="ch46ixtex"/></g>`,
		"fallback": "uix-sharp:animal-sanctuary",
	});
}

export default Component;
