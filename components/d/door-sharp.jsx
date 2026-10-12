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
		"content": `<style>.dph_vej6h {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 6.5h3");
}

.o57ttnb9p {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 12.5h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.xuwjnbqhw {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 2.75h13.5v18.5H5.25z");
}
</style><g class="ux2u0rbkq"><path class="xuwjnbqhw"/><path class="o57ttnb9p"/><path class="dph_vej6h"/></g>`,
		"fallback": "iconoven:door-sharp",
	});
}

export default Component;
