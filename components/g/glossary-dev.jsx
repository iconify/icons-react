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
		"content": `<style>.n7zp-2bhr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6.5Q9 4.25 3 5v13.5q6-.75 9 1.5m0-13.5q3-2.25 9-1.5v13.5q-6-.75-9 1.5m0-13.5V20M5.75 9.5h3.5M5.75 13h3.5m5.5-3.5h3.5m-3.5 3.5h3.5");
}
</style><path class="n7zp-2bhr"/>`,
		"fallback": "uix-sharp:glossary-dev",
	});
}

export default Component;
