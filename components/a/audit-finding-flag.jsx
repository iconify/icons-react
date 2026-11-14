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
		"content": `<style>.urxb1vb_j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4h14l-3 4.75l3 4.75H5Zm0-1v18m5.75-14.75V9m0 2.25h.01");
}
</style><path class="urxb1vb_j"/>`,
		"fallback": "uix-sharp:audit-finding-flag",
	});
}

export default Component;
