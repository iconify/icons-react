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
		"content": `<style>.nfysb4bpg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 9a4.5 4.5 0 0 1 9 0M12 2.5v2M3 9h18M3 21h18M6 12v6m4-6v6m4-6v6m4-6v6");
}
</style><path class="nfysb4bpg"/>`,
		"fallback": "uix-sharp:government-building",
	});
}

export default Component;
