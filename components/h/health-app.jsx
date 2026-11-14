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
		"content": `<style>.l1tv0xafw {
  d: path("M6 2.5h12v19H6ZM10.5 5h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yntwclbqx {
  d: path("M8.5 13H10l1-2.5l1.75 5l1-2.5h1.75m-5 6h3");
}
</style><g class="ulnmmdpxh"><path class="l1tv0xafw"/><path class="yntwclbqx"/></g>`,
		"fallback": "uix-sharp:health-app",
	});
}

export default Component;
