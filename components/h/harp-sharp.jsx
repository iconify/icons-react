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
		"content": `<style>.c97bewcqn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 3.75v17h3m-3-17c2.5 0 4 3 7.5 3c2.5 0 4-1.5 5.75-1.5m-9.75.65v12.5M12.5 7.35V14m3.25-6.9v2.5M19 5.25L7.5 20.75");
}
</style><path class="c97bewcqn"/>`,
		"fallback": "iconoven:harp-sharp",
	});
}

export default Component;
