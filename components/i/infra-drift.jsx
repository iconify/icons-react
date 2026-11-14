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
		"content": `<style>.mtj3ewvgg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 2.5h15v6h-15Zm8.7 15H2.5v-6h16v.2m-9-6.2h.01m-4.01 9h.01m12.49 0V18m0 3h.01");
}
</style><path class="mtj3ewvgg"/>`,
		"fallback": "uix-sharp:infra-drift",
	});
}

export default Component;
