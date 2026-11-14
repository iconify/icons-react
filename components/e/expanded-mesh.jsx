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
		"content": `<style>.kqgbm28pd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 6h12.75A2.625 2.625 0 0 1 21 8.625v6.75A2.625 2.625 0 0 1 18.375 18H5.625A2.625 2.625 0 0 1 3 15.375v-6.75A2.625 2.625 0 0 1 5.625 6M3 9l9 9M6 6l12 12M12 6l9 9M3 15l9-9M6 18L18 6m-6 12l9-9");
}
</style><path class="kqgbm28pd"/>`,
		"fallback": "uix:expanded-mesh",
	});
}

export default Component;
