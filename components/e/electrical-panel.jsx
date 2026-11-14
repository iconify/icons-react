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
		"content": `<style>.wbrkbx-5x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5h16v19H4ZM7.5 6v3m3-3v3m3-3v3m3-3v3m-9 3v3m3-3v3m3-3v3m3-3v3m-9 3.5h9");
}
</style><path class="wbrkbx-5x"/>`,
		"fallback": "uix-sharp:electrical-panel",
	});
}

export default Component;
