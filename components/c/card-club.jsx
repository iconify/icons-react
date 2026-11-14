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
		"content": `<style>.eoz3zibrm {
  d: path("M4.5 2.5h15v19h-15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v9mlxixno {
  fill: currentColor;
  d: path("m10.5 17l.75-3.75a2.25 2.25 0 1 1-.75-2.75a2.25 2.25 0 1 1 3 0a2.25 2.25 0 1 1-.75 2.75L13.5 17Z");
}
</style><g class="ulnmmdpxh"><path class="eoz3zibrm"/><path class="v9mlxixno"/></g>`,
		"fallback": "uix-sharp:card-club",
	});
}

export default Component;
