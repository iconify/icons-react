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
		"content": `<style>.sye78vbzq {
  d: path("M16.25 17v-1a1.75 1.75 0 0 1 3.5 0v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xrrfgp3ac {
  d: path("M12.2 19.5H8.5l-5-7.5l5-7.5h11v7.2M8.25 12h.01M15 17h6v4.5h-6Z");
}
</style><g class="ulnmmdpxh"><path class="xrrfgp3ac"/><path class="sye78vbzq"/></g>`,
		"fallback": "uix-sharp:brand-protection",
	});
}

export default Component;
