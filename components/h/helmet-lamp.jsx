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
		"content": `<style>.jzr2pzb0o {
  d: path("M13.75 11.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm4.25-1L21.5 8M18 12.5l3.5 2.5");
}

.seka_ekbc {
  d: path("M3 17c0-6.5 3.5-11 8-11c2.25 0 4 1.25 4.75 3.25M2.5 17h17M17 17l-.5-3.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="seka_ekbc"/><path class="jzr2pzb0o"/></g>`,
		"fallback": "uix-sharp:helmet-lamp",
	});
}

export default Component;
