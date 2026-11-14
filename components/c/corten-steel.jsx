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

.f5w2n3g7f {
  d: path("M7.5 7.5q2.25-2 4.5 0t4.5 0m-9 4.5q2.25-2 4.5 0t4.5 0m-9 4.5q2.25-2 4.5 0t4.5 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eoz3zibrm"/><path class="f5w2n3g7f"/></g>`,
		"fallback": "uix-sharp:corten-steel",
	});
}

export default Component;
