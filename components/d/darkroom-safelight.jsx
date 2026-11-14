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
		"content": `<style>.fei8yg9-b {
  d: path("M7.75 5.75h8.5v4.5h-8.5ZM12 16v5m-4.5-5.5l-2 4m11-4l2 4");
}

.lcs5lo0kt {
  d: path("M5 3h14v10H5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lcs5lo0kt"/><path class="fei8yg9-b"/></g>`,
		"fallback": "uix-sharp:darkroom-safelight",
	});
}

export default Component;
