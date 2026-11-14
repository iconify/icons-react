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
		"content": `<style>.n3mk62pwk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 10h17v11h-17Zm2 0L12 8l6.5 2M12 8V6.5a2 2 0 1 0-2-2M3.5 14h17");
}
</style><path class="n3mk62pwk"/>`,
		"fallback": "uix-sharp:clothes-delivery-box",
	});
}

export default Component;
