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
		"content": `<style>.fkdpf8nez {
  d: path("M14 16h8v5.5h-8Zm2.75 0v-1.25h2.5V16");
}

.rd38379um {
  d: path("M11.2 21.5H4.5v-19h15v9.4M8 7h8m-8 3.5h8M8 14h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rd38379um"/><path class="fkdpf8nez"/></g>`,
		"fallback": "uix-sharp:employment-contract",
	});
}

export default Component;
