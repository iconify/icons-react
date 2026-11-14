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
		"content": `<style>.hud1qb6ap {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm17 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM2 19a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm17 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM7.75 5h2.75m3 0h2.75m-8.5 14h2.75m3 0h2.75M3.5 9.25v5.5m17-5.5v5.5");
}
</style><path class="hud1qb6ap"/>`,
		"fallback": "uix-sharp:field-boundary",
	});
}

export default Component;
