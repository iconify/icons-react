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
		"content": `<style>.nux34_pfc {
  d: path("m12.65 9.12l7.95 4.51l.65.37v3.5l-.65-.37l-7.95-4.51l-.65-.37l-.65.37l-7.95 4.51l-.65.37V14l.65-.37l7.95-4.51l.65-.37z");
}

.uz6rs8bdx {
  d: path("M9.75 5A2.25 2.25 0 1 1 12 7.25v2");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zari_e5dk {
  d: path("M5.25 16.5v3.75h13.5V16.5");
}
</style><g class="x2cwu0gfd"><path class="uz6rs8bdx"/><path class="nux34_pfc"/><path class="zari_e5dk"/></g>`,
		"fallback": "iconoven:coat-hanger-sharp",
	});
}

export default Component;
