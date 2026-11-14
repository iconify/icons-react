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
		"content": `<style>.b-okd9rmv {
  d: path("M8.5 3.5L10 8l2-2.5L14 8l1.5-4.5m-3.5 8h.01M12 15h.01M12 18.5h.01");
}

.nbcp2-b6v {
  d: path("m8.5 3.5l-4 2L3 18h3l1-8v11.5h10V10l1 8h3L19.5 5.5l-4-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nbcp2-b6v"/><path class="b-okd9rmv"/></g>`,
		"fallback": "uix-sharp:dress-shirt",
	});
}

export default Component;
