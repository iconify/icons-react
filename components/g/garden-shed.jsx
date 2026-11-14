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
		"content": `<style>.dpz-8625x {
  d: path("M7.5 12h7v9.5h-7Zm0 2.5h7m-7 4.5h7m-7 0l7-4.5");
}

.ojv7dhbgt {
  d: path("m2.5 9.5l19-4.5m-17 4v12.5h15v-16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ojv7dhbgt"/><path class="dpz-8625x"/></g>`,
		"fallback": "uix-sharp:garden-shed",
	});
}

export default Component;
