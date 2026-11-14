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
		"content": `<style>.amg-yhb4y {
  d: path("M8.5 6.5h7V10c0 1 2 1.5 2 3v7a1.5 1.5 0 0 1-1.5 1.5H8A1.5 1.5 0 0 1 6.5 20v-7c0-1.5 2-2 2-3Zm0 0c0-4.5 7-4.5 7 0m-8.75 5.25l-3.75 2m14.25-2l3.75 2");
}

.eq7bt1bey {
  d: path("M9.5 14.5h5V18h-5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="amg-yhb4y"/><path class="eq7bt1bey"/></g>`,
		"fallback": "uix-sharp:apron",
	});
}

export default Component;
