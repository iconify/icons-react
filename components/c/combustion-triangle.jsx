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
		"content": `<style>.dk38xrbnv {
  d: path("m12 2.5l9.75 17H2.25Z");
}

.ku2rk-bwd {
  d: path("M12.75 8.5c.25 2 2.25 3 2.25 5.5a3.5 3.5 0 0 1-6 0c0-1.5 1-2.5 1.75-2.75c0 1 .5 1.5 1 1.5c.25-1.75 1-2.75 1-4.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dk38xrbnv"/><path class="ku2rk-bwd"/></g>`,
		"fallback": "uix-sharp:combustion-triangle",
	});
}

export default Component;
