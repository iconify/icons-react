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
		"content": `<style>.ipx_1-bcq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3h10v7h-10ZM3 21.5v-9h11.5v9M21 8v8h-3.5m-9-6v2.5M19.25 16v5.5");
}
</style><path class="ipx_1-bcq"/>`,
		"fallback": "uix-sharp:home-office-room",
	});
}

export default Component;
