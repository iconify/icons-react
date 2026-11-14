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
		"content": `<style>.kqvtt2tir {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20V6a2 2 0 0 1 2-2h9l7 7v7a2 2 0 0 1-2 2Zm0-3.5h18M12 4v12.5");
}
</style><path class="kqvtt2tir"/>`,
		"fallback": "uix-sharp:air-cargo-uld",
	});
}

export default Component;
