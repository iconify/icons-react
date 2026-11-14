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
		"content": `<style>.uugvc0cnd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v15M4.5 8v3c0 4.5 15 4.5 15 0V8M8 17.5h8c0 2.5-2 4-4 4s-4-1.5-4-4ZM4.5 5h.01M19.5 5h.01");
}
</style><path class="uugvc0cnd"/>`,
		"fallback": "uix-sharp:ballroom",
	});
}

export default Component;
