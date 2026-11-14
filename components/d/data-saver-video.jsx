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
		"content": `<style>.id95gub5u {
  d: path("M14.1 15.5H2.5v-12h17v8.2");
}

.tkz7rmbsw {
  d: path("M8.5 6.25L14 9.5l-5.5 3.25ZM18 14.5v7m-3-3l3 3l3-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="id95gub5u"/><path class="tkz7rmbsw"/></g>`,
		"fallback": "uix-sharp:data-saver-video",
	});
}

export default Component;
