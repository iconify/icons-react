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
		"content": `<style>.eh5cw8bnl {
  d: path("M14.618 17.571L11 19.5l-7.5-4v-9l7.5-4l7.5 4v4.1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zuqiwmbrd {
  d: path("m3.5 6.5l7.5 4l7.5-4m-7.5 4v9m7.793-5.225l3.182 3.182l-1.768 1.768l-3.182-3.182ZM18.75 17.5L15 21.25");
}
</style><g class="ulnmmdpxh"><path class="eh5cw8bnl"/><path class="zuqiwmbrd"/></g>`,
		"fallback": "uix-sharp:container-build",
	});
}

export default Component;
