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
		"content": `<style>.gmyib0bfd {
  d: path("M6 12c2-3.5 6.5-3.5 8.5 0l3-2.5v5l-3-2.5c-2 3.5-6.5 3.5-8.5 0Zm3 0h.01");
}

.qelbh0-8f {
  d: path("M2.5 4.5v13a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-13m-19 2h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qelbh0-8f"/><path class="gmyib0bfd"/></g>`,
		"fallback": "uix-sharp:aquarium-visit",
	});
}

export default Component;
