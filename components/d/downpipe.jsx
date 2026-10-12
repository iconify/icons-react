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
		"content": `<style>.ga11bl23j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 2.75h2q.75 0 .75.75v14q0 .75-.53 1.28l-1.94 1.94q-.53.53-1.28.53h-4.5q-.75 0-.75-.75v-2q0-.75.75-.75h4q.75 0 .75-.75V3.5q0-.75.75-.75m8 0v18.5M13.5 7h5.25m-5.25 6h5.25M10 7h3.5M10 13h3.5");
}
</style><path class="ga11bl23j"/>`,
		"fallback": "iconoven:downpipe",
	});
}

export default Component;
