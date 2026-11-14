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
		"content": `<style>.czx3pkblc {
  d: path("M12.75 11a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.tibrspbed {
  d: path("M2.5 7H18v13.5H2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zrco9wvof {
  d: path("M6.5 7V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H18M2.5 17.75l5-5l4 4L13.75 15L18 18.25");
}
</style><g class="ulnmmdpxh"><path class="tibrspbed"/><path class="zrco9wvof"/><path class="czx3pkblc"/></g>`,
		"fallback": "uix-sharp:depth-photo",
	});
}

export default Component;
