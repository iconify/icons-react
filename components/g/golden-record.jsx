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
		"content": `<style>.ow2ecpbvz {
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-.052 5.638a6 6 0 0 1-3.586-7.69m7.69-3.586a6 6 0 0 1 3.586 7.69");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="ow2ecpbvz"/></g>`,
		"fallback": "uix-sharp:golden-record",
	});
}

export default Component;
