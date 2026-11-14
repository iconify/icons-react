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
		"content": `<style>.gy18w5b_j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 11.5h12v10H6Zm1.5-2.75h9M12 5.5v3.25m0-3.25c0-2-2-3-4.5-3c0 2 2 3 4.5 3Zm0 0c0-2 2-3 4.5-3c0 2-2 3-4.5 3Z");
}
</style><path class="gy18w5b_j"/>`,
		"fallback": "uix-sharp:cutting-rooting-powder",
	});
}

export default Component;
