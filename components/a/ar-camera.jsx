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
		"content": `<style>.dxsxh5xhc {
  d: path("M6 2.5h12v19H6Z");
}

.oy4zd3qtt {
  d: path("M9 10.25L12 12l3-1.75M12 12v3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y2ngbzh7r {
  d: path("m12 8.5l3 1.75v3.5l-3 1.75l-3-1.75v-3.5Z");
}
</style><g class="ulnmmdpxh"><path class="dxsxh5xhc"/><path class="y2ngbzh7r"/><path class="oy4zd3qtt"/></g>`,
		"fallback": "uix-sharp:ar-camera",
	});
}

export default Component;
