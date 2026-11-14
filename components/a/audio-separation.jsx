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
		"content": `<style>.d6b478nbv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4.5v3m4.25-4v5m4.25-6v7M16.25 4v4m4.25-3.5v3m-17 8v5m4.25-4v3m4.25-5v7m4.25-6v5m4.25-4v3");
}
</style><path class="d6b478nbv"/>`,
		"fallback": "uix-sharp:audio-separation",
	});
}

export default Component;
