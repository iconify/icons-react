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
		"content": `<style>.a64rl16rj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75v18.5m2.25-17.5h7v3.5h-7zm-9.5 6.5h5v3.5h-5zm-2 6.5h7v3.5h-7zm11.5 0h4v3.5h-4z");
}
</style><path class="a64rl16rj"/>`,
		"fallback": "iconoven:diverging-bar-sharp",
	});
}

export default Component;
