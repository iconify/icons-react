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
		"content": `<style>.c_11qvbvd {
  d: path("m2.5 18l5-12h14l-5 12Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yzqpbab2j {
  d: path("m9.25 15l2.5-6h5.5l-2.5 6Z");
}
</style><g class="ulnmmdpxh"><path class="c_11qvbvd"/><path class="yzqpbab2j"/></g>`,
		"fallback": "uix-sharp:cover-slip",
	});
}

export default Component;
