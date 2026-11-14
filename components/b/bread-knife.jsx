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
		"content": `<style>.p7nb7hbdk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.808 18.718l4.596-4.597l2.475 2.475l-4.597 4.596Zm5.656-7.425l7.425-7.425l4.596.354l-.353 2.475l-1.945.176l-.177 1.945l-1.944.177l-.177 1.944l-1.944.177l-.177 1.945l-1.945.176l.177 1.591Z");
}
</style><path class="p7nb7hbdk"/>`,
		"fallback": "uix-sharp:bread-knife",
	});
}

export default Component;
