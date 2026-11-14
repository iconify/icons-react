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
		"content": `<style>.iau37ab1m {
  d: path("M2.5 3.5h19v13h-19Zm9.5 13v4m-4 0h8");
}

.t04da5bnd {
  d: path("M8.5 10a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM12 5.5v1.75m0 5.5v1.75M7 10h1.75m6.5 0H17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="iau37ab1m"/><path class="t04da5bnd"/></g>`,
		"fallback": "uix-sharp:attack-target",
	});
}

export default Component;
