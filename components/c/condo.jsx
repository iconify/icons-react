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
		"content": `<style>.j2omq6gic {
  fill: currentColor;
  d: path("M13.5 5.25h3v2.5h-3Z");
}

.p36xabcxn {
  d: path("M7.5 10.5h3m3 0h3m-9 4h3m3 0h3m-6 7v-3.25h3v3.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uv9rg25wm {
  d: path("M4.5 2.5h15v19h-15Zm3 4h3");
}
</style><g class="ulnmmdpxh"><path class="uv9rg25wm"/><path class="j2omq6gic"/><path class="p36xabcxn"/></g>`,
		"fallback": "uix-sharp:condo",
	});
}

export default Component;
