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
		"content": `<style>.ttsfjubit {
  d: path("M2.5 2.5v19h19");
}

.tx7vg9nnx {
  d: path("M5.5 11L8 9.5l2.5 3.5l3-6l3 10L20 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ttsfjubit"/><path class="tx7vg9nnx"/></g>`,
		"fallback": "uix-sharp:bullwhip-effect",
	});
}

export default Component;
