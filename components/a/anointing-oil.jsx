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
		"content": `<style>.q-0bnj2sh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 12v1.5a4.25 4.25 0 1 0 3 0V12M10 10h4v2h-4Zm2-8s2 2.25 2 3.25a2 2 0 0 1-4 0c0-1 2-3.25 2-3.25Z");
}
</style><path class="q-0bnj2sh"/>`,
		"fallback": "uix-sharp:anointing-oil",
	});
}

export default Component;
