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
		"content": `<style>.g2dxp65no {
  d: path("m9 5.5l3 3.25l3-3.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ves672bun {
  d: path("M3.5 5.5h17V15h-17Zm-1 13h19");
}
</style><g class="ulnmmdpxh"><path class="ves672bun"/><path class="g2dxp65no"/></g>`,
		"fallback": "uix-sharp:dry-flat",
	});
}

export default Component;
