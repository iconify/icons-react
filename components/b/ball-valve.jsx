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
		"content": `<style>.by4p7cbcs {
  d: path("M7.5 14a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm-5-3h5v6h-5Zm14 0h5v6h-5Z");
}

.imy2780wd {
  d: path("M12 9.5V5h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="by4p7cbcs"/><path class="imy2780wd"/></g>`,
		"fallback": "uix-sharp:ball-valve",
	});
}

export default Component;
