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
		"content": `<style>.jgie8bcwm {
  d: path("m13.5 8.5l2 2l-2 2");
}

.m-52rc0bf {
  d: path("M9.5 15.5v-3a2 2 0 0 1 2-2h4");
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
</style><g class="ulnmmdpxh"><path class="yh3o8-b_d"/><path class="m-52rc0bf"/><path class="jgie8bcwm"/></g>`,
		"fallback": "uix-sharp:directions-right",
	});
}

export default Component;
