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
		"content": `<style>.eb9rds8mv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5v19M2.5 4H19m-3.5 0v4a1.5 1.5 0 0 1-3 0M10 12.25v9.25h11v-9.25m-11 4.5h11");
}
</style><path class="eb9rds8mv"/>`,
		"fallback": "uix-sharp:building-under-construction",
	});
}

export default Component;
