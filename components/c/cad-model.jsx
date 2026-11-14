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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w_3_fcchr {
  d: path("M12 2.5L20 7v10l-8 4.5L4 17V7Z");
}

.warp9sian {
  d: path("m4 7l4 2.25L12 7l4 2.25L20 7M8 9.25v5l4 2.25l4-2.25v-5m-4 7.25v5M12 7v5l-4 2.25M12 12l4 2.25");
}
</style><g class="ulnmmdpxh"><path class="w_3_fcchr"/><path class="warp9sian"/></g>`,
		"fallback": "uix-sharp:cad-model",
	});
}

export default Component;
