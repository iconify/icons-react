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
		"content": `<style>.kcn5vlk7o {
  d: path("M8.5 11.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM7 16.25C7 14.9 8.3 14 10 14s3 .9 3 2.25m.75-4.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0ZM15 14c1.25 0 2 .75 2 1.75");
}

.q3wixnhae {
  d: path("M3 7a2 2 0 0 1 2-2h4.5l2 2H19a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q3wixnhae"/><path class="kcn5vlk7o"/></g>`,
		"fallback": "uix-sharp:folder-shared",
	});
}

export default Component;
