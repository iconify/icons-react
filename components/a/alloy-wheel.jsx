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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}

.zqaf7i3ci {
  d: path("M9.75 12a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM12 9.75V5.5m2.14 5.805l4.042-1.314m-4.859 3.829l2.498 3.439m-5.144-3.439l-2.498 3.439m1.681-5.954L5.818 9.991");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="zqaf7i3ci"/></g>`,
		"fallback": "uix-sharp:alloy-wheel",
	});
}

export default Component;
