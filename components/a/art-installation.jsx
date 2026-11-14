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
		"content": `<style>.nzqy8b1bz {
  d: path("M5.75 13.25L8 9.5L9.25 11");
}

.ukdudugbn {
  d: path("M3 5h9v11H3Zm12 0h6.5v8H15ZM2.5 19.5h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ukdudugbn"/><path class="nzqy8b1bz"/></g>`,
		"fallback": "uix-sharp:art-installation",
	});
}

export default Component;
