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

.pfsf5fp9w {
  d: path("M12.75 5.5L9 10h2.5l-.75 3L15 8.25h-2.5ZM8 15.75h8M8 18.5h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eoz3zibrm"/><path class="pfsf5fp9w"/></g>`,
		"fallback": "uix-sharp:electric-bill",
	});
}

export default Component;
