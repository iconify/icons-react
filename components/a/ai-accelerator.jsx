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
		"content": `<style>.dp48jcbwg {
  d: path("M5.5 5.5h13v13h-13Zm4-3v3m5-3v3m-5 13v3m5-3v3m-12-12h3m-3 5h3m13-5h3m-3 5h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wkq9kjbkc {
  d: path("m13 8.5l-3.5 4H12l-1 3l3.5-4H12Z");
}
</style><g class="ulnmmdpxh"><path class="dp48jcbwg"/><path class="wkq9kjbkc"/></g>`,
		"fallback": "uix-sharp:ai-accelerator",
	});
}

export default Component;
