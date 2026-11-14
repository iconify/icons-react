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
		"content": `<style>.p8u760b4u {
  d: path("M3.5 3v17.5H21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y-9htdbnx {
  d: path("M15 12.5V14m0 2.5V18m-4-9.5H9.5M7 8.5H5.5");
}

.zrtn0lbbp {
  fill: currentColor;
  d: path("M12.75 8.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="p8u760b4u"/><path class="zrtn0lbbp"/><path class="y-9htdbnx"/></g>`,
		"fallback": "uix-sharp:data-point",
	});
}

export default Component;
