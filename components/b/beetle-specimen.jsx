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
		"content": `<style>.jvuplgbpm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 14a5.5 6.5 0 1 0 11 0a5.5 6.5 0 1 0-11 0Zm1-3.5h9m-4.5 0v10M6.5 13l-3-1.5M7.75 18L4.5 20.5m13-7.5l3-1.5M16.25 18l3.25 2.5m.5-16l-6 6m6-6h.01");
}
</style><path class="jvuplgbpm"/>`,
		"fallback": "uix-sharp:beetle-specimen",
	});
}

export default Component;
