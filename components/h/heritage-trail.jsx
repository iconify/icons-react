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
		"content": `<style>.xl_x84b7l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5C5 14 9 10.5 12 10.5s7 3.5 9.5 10m-9.5-10V3m0 0l5 1.75l-5 1.75Zm2 15.5h.01m-4.01-2h.01M13 14h.01");
}
</style><path class="xl_x84b7l"/>`,
		"fallback": "uix-sharp:heritage-trail",
	});
}

export default Component;
