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
		"content": `<style>.frc0420rb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4.5H17m-14.5 5h12m-9.5 5h6.5m-9 5h9m9-15h.01M18 9.5h.01M18 14.75v3.5M18 21h.01");
}
</style><path class="frc0420rb"/>`,
		"fallback": "uix-sharp:dust-storm-warning",
	});
}

export default Component;
