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
		"content": `<style>.r9_f020fb {
  d: path("m11.65 5.812l1.209 3.322l-3.322 1.209M6.5 13.5h11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v3upim58d {
  d: path("M2.5 3.5h19v13h-19Zm9.5 13v4m-4 0h8M7.422 6.598l8.156 3.804");
}
</style><g class="ulnmmdpxh"><path class="v3upim58d"/><path class="r9_f020fb"/></g>`,
		"fallback": "uix-sharp:arrival-screen",
	});
}

export default Component;
