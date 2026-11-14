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
		"content": `<style>.jnlxfacyd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 7.5H6a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h2.5Zm0 2.5H11m-2.5 4H11m3-9.5h7.5v15H14Zm3.75 5.5h.01m-.01 4h.01");
}
</style><path class="jnlxfacyd"/>`,
		"fallback": "uix-sharp:disconnect-power",
	});
}

export default Component;
