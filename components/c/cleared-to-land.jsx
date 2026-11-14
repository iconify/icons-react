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
		"content": `<style>.hs9ui6blx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m17.745 14.067l-2.482.299l-2.814-1.625l-5.907 3.23l-1.732-1l4.174-4.23l-2.381-1.375l-2.516.857l-.866-.5l2.4-2.656l1.1-3.406l.866.5l.516 2.607l2.381 1.375l1.576-5.73l1.732 1l.157 6.73l2.814 1.625ZM2.5 20.5H11m3.75-2.5l2 2L21 15.75");
}
</style><path class="hs9ui6blx"/>`,
		"fallback": "uix-sharp:cleared-to-land",
	});
}

export default Component;
