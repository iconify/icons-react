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
		"content": `<style>.ywovsybbh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.808 13.414l9.899-9.899h7.778v7.778l-9.899 9.899Zm5.303.354l4.95-4.95m-2.829 7.071l3.182-3.182");
}
</style><path class="ywovsybbh"/>`,
		"fallback": "uix-sharp:data-label",
	});
}

export default Component;
