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
		"content": `<style>.bi1pcx29v {
  d: path("M12 11c0-1.68-1.12-2.57-3-2.5c.07 1.5 1.2 2.4 3 2.5Zm0-1c0-1.8 1.13-3.15 3-3.25c-.07 1.9-1.2 3.25-3 3.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vjbwu0pwl {
  d: path("M2.5 3.5h19v13h-19Zm9.5 13v4m-4 0h8m-4-7.25V10");
}
</style><g class="ulnmmdpxh"><path class="vjbwu0pwl"/><path class="bi1pcx29v"/></g>`,
		"fallback": "uix-sharp:crop-monitor",
	});
}

export default Component;
