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
		"content": `<style>.dy97i4b8y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 7a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm4.5 4.5V14m-9 0h18M5 14v7.5M19 14v7.5");
}
</style><path class="dy97i4b8y"/>`,
		"fallback": "uix-sharp:dressing-table",
	});
}

export default Component;
