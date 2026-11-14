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
		"content": `<style>.bd4teabdo {
  d: path("M3.5 7H14v3H3.5ZM18 14.5V21m-2.75-2.75L18 21l2.75-2.75");
}

.dzfc3vbiq {
  d: path("M6 21.5v-19h5.5v15.6m0 .3v3.1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dzfc3vbiq"/><path class="bd4teabdo"/></g>`,
		"fallback": "uix-sharp:drop-tower",
	});
}

export default Component;
