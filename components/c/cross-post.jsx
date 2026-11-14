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
		"content": `<style>.x1bb183va {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5h7v9h-7Zm9.5 3l3-3m-2.75 0H15v2.75m-3 3.25l3 3m-2.75 0H15v-2.75M17.5 3.5h4v4h-4Zm0 13h4v4h-4Z");
}
</style><path class="x1bb183va"/>`,
		"fallback": "uix-sharp:cross-post",
	});
}

export default Component;
