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
		"content": `<style>.mi3c1twbg {
  d: path("M10 8.5q0 3-1.5 4.5M4.75 3.75h.01m-.76 3h.01m.74 3h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xjcurok8p {
  d: path("M11.5 12h8v9.5h-8Zm2 0V8.5h-6V5l3-1.75h7V12");
}
</style><g class="ulnmmdpxh"><path class="xjcurok8p"/><path class="mi3c1twbg"/></g>`,
		"fallback": "uix-sharp:garden-mister",
	});
}

export default Component;
