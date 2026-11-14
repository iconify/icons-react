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
		"content": `<style>.c4zexibpb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 11h12.5a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5H4a1.5 1.5 0 0 1-1.5-1.5v-4A1.5 1.5 0 0 1 4 11Zm2.5-7h7v4.5h-7ZM10 8.5V11m-4 7v3m8.5-3v3m3.5-6.5h1a2 2 0 0 1 2 2v2m-1 0h2v3h-2Z");
}
</style><path class="c4zexibpb"/>`,
		"fallback": "uix-sharp:air-compressor",
	});
}

export default Component;
