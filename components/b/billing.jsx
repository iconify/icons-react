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

.skw4bhy1z {
  d: path("M14.5 8c-.3-1.1-1.25-1.75-2.5-1.75c-1.5 0-2.5.85-2.5 2c0 2.5 5 1.25 5 3.5c0 1-1.1 1.5-2.5 1.5c-1.25 0-2.25-.5-2.5-1.25M12 5.25v1m0 7v1m-4 3h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eoz3zibrm"/><path class="skw4bhy1z"/></g>`,
		"fallback": "uix-sharp:billing",
	});
}

export default Component;
