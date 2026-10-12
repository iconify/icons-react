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
		"content": `<style>.g3jvdsbwi {
  cx: 4.25px;
  cy: 9px;
  r: 1.5px;
}

.uhkhlvkje {
  d: path("M10.25 10.75C8 11.25 6 14 5.25 21.25m8.5-10.5c2.25.5 4.25 3.25 5 10.5M5.75 9h4.5m3.5 0h4.5m-8-1.75h3.5v3.5h-3.5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zo34uu--r {
  cx: 19.75px;
  cy: 9px;
  r: 1.5px;
}
</style><g class="x2cwu0gfd"><path class="uhkhlvkje"/><circle class="g3jvdsbwi"/><circle class="zo34uu--r"/></g>`,
		"fallback": "iconoven:bezier-handle-sharp",
	});
}

export default Component;
