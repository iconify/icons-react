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
		"content": `<style>.rzv_cxi0l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5H7v19H2.5Zm9.65 13h-2.4v-13h4.5v12.7M17 2.5h4.5v9H17ZM15 18h6");
}
</style><path class="rzv_cxi0l"/>`,
		"fallback": "uix-sharp:board-column-remove",
	});
}

export default Component;
