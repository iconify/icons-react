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
		"content": `<style>.xt46i8b6f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 4.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM6 21.5l4-7l4.5 7m-5-12.75l.5 5.75m-.25-4l4.75-.5m0 0L21 3.5");
}
</style><path class="xt46i8b6f"/>`,
		"fallback": "uix-sharp:baseball-swing",
	});
}

export default Component;
