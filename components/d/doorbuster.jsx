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
		"content": `<style>.mrr7nubfi {
  d: path("M4 21.5v-19h14v10.2");
}

.njpxl_b4p {
  d: path("M4 2.5L11 5v14l-7 2.5ZM9.25 12h.01m5.49 9.25l6.5-6.5m-5.75.75h.01m4.99 5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mrr7nubfi"/><path class="njpxl_b4p"/></g>`,
		"fallback": "uix-sharp:doorbuster",
	});
}

export default Component;
