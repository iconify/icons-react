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
		"content": `<style>.xowwqgr_z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6h18v4a2 2 0 0 0 0 4v4H3v-4a2 2 0 0 0 0-4Zm6 9l6-6m-5.75.75h.01m5.49 4.5h.01");
}
</style><path class="xowwqgr_z"/>`,
		"fallback": "uix-sharp:bond",
	});
}

export default Component;
