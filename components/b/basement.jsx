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
		"content": `<style>.llmeiccki {
  d: path("m5 8.5l7-6l7 6V13H5ZM2.5 13h19");
}

.suf5t7bvl {
  d: path("M10.5 13v-3h3v3m-8 2.75h13v5.75h-13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="llmeiccki"/><path class="suf5t7bvl"/></g>`,
		"fallback": "uix-sharp:basement",
	});
}

export default Component;
