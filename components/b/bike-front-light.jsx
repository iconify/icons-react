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
		"content": `<style>.ai_gztbjf {
  d: path("M2.5 4.5L5 6h14l2.5-1.5");
}

.o0-fh_bty {
  d: path("M8.5 9.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM12 13v6.5m0-10h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ai_gztbjf"/><path class="o0-fh_bty"/></g>`,
		"fallback": "uix-sharp:bike-front-light",
	});
}

export default Component;
