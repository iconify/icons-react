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
		"content": `<style>.px-vhz39k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h19v8h-19Zm0 10.75h19V22h-19Zm4-8v2.5m-.5 8.5h10m-10 3h6.5");
}
</style><path class="px-vhz39k"/>`,
		"fallback": "uix-sharp:input-autocomplete",
	});
}

export default Component;
