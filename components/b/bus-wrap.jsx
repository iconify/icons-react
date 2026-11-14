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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v3gwgj-kc {
  d: path("M4.5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm11 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.vjnm_dbur {
  d: path("M2.5 16.5v-10a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v10Zm0-6.5h19m-11 6.5l3-6.5m0 6.5l3-6.5");
}
</style><g class="ulnmmdpxh"><path class="vjnm_dbur"/><path class="v3gwgj-kc"/></g>`,
		"fallback": "uix-sharp:bus-wrap",
	});
}

export default Component;
