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
		"content": `<style>.dzpym8b4f {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.25 19.5h.01m7.99 0h.01");
}

.n9ou7go9c {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6.75h1.4l1.184-.001L5.61 7.9l1.79 7.85M6 9.25h13.5l1.276.001l-.306 1.239l-.95 3.8l-.412 1.471l-1.528-.011H7.4Z");
}

.qz54y769q {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.75h6V6h-6z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="n9ou7go9c"/><path class="dzpym8b4f"/><path class="qz54y769q"/></g>`,
		"fallback": "iconoven:cart-full-sharp",
	});
}

export default Component;
