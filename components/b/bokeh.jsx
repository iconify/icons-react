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
		"content": `<style>.dh8ct5jco {
  d: path("M3.5 11a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Z");
}

.t9q04mb2w {
  d: path("M14 6a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm-3 11a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dh8ct5jco"/><path class="t9q04mb2w"/></g>`,
		"fallback": "uix-sharp:bokeh",
	});
}

export default Component;
