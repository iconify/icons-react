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
		"content": `<style>.eirqxcakv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.5 18.5l-3-11L8 6m4.2 12.5H8v-14h9v7.7M15 15h6.5v6.5H15Z");
}
</style><path class="eirqxcakv"/>`,
		"fallback": "uix-sharp:camp-game",
	});
}

export default Component;
