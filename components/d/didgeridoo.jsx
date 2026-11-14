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
		"content": `<style>.dg87ekbll {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 2.5h2.5l1 14q.25 2.5 2.25 5h-9q2-2.5 2.25-5ZM10 12h4");
}
</style><path class="dg87ekbll"/>`,
		"fallback": "uix-sharp:didgeridoo",
	});
}

export default Component;
