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
		"content": `<style>.i_xl_f7ch {
  d: path("M15.56 4.56a2.75 1.5 45 0 0 3.88 3.88m-9.38 1.62l3.88 3.88m0 0c6.89-1.22 6.34 2.96 0 0m0 0c2.96 6.34-1.22 6.89 0 0");
}

.omdxdrbrc {
  d: path("m8.44 19.44l11-11a2.75 1.5 45 0 0-3.88-3.88l-11 11a2.75 1.5 45 0 0 3.88 3.88Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="omdxdrbrc"/><path class="i_xl_f7ch"/></g>`,
		"fallback": "iconoven:graduation-scroll-sharp",
	});
}

export default Component;
