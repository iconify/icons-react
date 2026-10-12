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
		"content": `<style>.mmzb9nial {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 12c-1.75-2.25-3.5-3.75-5.25-3.75a3.75 3.75 0 0 0 0 7.5c1.75 0 3.5-1.5 5.25-3.75m0 0c1.75 2.25 3.5 3.75 5.25 3.75a3.75 3.75 0 0 0 0-7.5c-1.75 0-3.5 1.5-5.25 3.75");
}
</style><path class="mmzb9nial"/>`,
		"fallback": "iconoven:infinity-sharp",
	});
}

export default Component;
