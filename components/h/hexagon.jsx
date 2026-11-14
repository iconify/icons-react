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
		"content": `<style>.cxntj7bdl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.313 3.008l5.818 3.359a2.63 2.63 0 0 1 1.313 2.274v6.718a2.63 2.63 0 0 1-1.313 2.274l-5.818 3.359a2.63 2.63 0 0 1-2.625 0l-5.819-3.359a2.63 2.63 0 0 1-1.313-2.274V8.641a2.63 2.63 0 0 1 1.313-2.274l5.819-3.359a2.63 2.63 0 0 1 2.625 0");
}
</style><path class="cxntj7bdl"/>`,
		"fallback": "uix:hexagon",
	});
}

export default Component;
