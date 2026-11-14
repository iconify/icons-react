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

.up-lq3jfa {
  d: path("M6 10.5h12V16H6Zm4 0V16m4-5.5V16");
}

.xpnpdgapb {
  d: path("M2.5 18.5v-13A1.5 1.5 0 0 1 4 4h5l2 2.5h9A1.5 1.5 0 0 1 21.5 8v10.5A1.5 1.5 0 0 1 20 20H4a1.5 1.5 0 0 1-1.5-1.5Z");
}
</style><g class="ulnmmdpxh"><path class="xpnpdgapb"/><path class="up-lq3jfa"/></g>`,
		"fallback": "uix-sharp:colour-swatch-group",
	});
}

export default Component;
