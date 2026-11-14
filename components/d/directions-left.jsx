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
		"content": `<style>.ae_c_u16f {
  d: path("M14.5 15.5v-3a2 2 0 0 0-2-2h-4");
}

.n7h80pb2l {
  d: path("m10.5 8.5l-2 2l2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yh3o8-b_d {
  d: path("M12 2.25L21.75 12L12 21.75L2.25 12Z");
}
</style><g class="ulnmmdpxh"><path class="yh3o8-b_d"/><path class="ae_c_u16f"/><path class="n7h80pb2l"/></g>`,
		"fallback": "uix-sharp:directions-left",
	});
}

export default Component;
