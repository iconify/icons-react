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
		"content": `<style>.n-n33r6ou {
  d: path("m13.5 16.75l-2.75 2l2.75 2");
}

.rbz1jkbxr {
  d: path("M2.5 2.5h8V10h-8Zm11 10h8v9h-8Zm-11-7h8m3 9.75h8M6.5 10v8.75h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rbz1jkbxr"/><path class="n-n33r6ou"/></g>`,
		"fallback": "uix-sharp:data-model",
	});
}

export default Component;
