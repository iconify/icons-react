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
		"content": `<style>.dbo4lr3fk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0m-3.5-1.5h3.75m-3.75 3h3.75m11.5-3h3.75m-3.75 3h3.75M12 12l2.25-2.25M12 12h.01");
}
</style><path class="dbo4lr3fk"/>`,
		"fallback": "uix:gas-governor",
	});
}

export default Component;
