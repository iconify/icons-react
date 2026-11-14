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
		"content": `<style>.vqcxajkhq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.5h18v15H3Zm0 5h18m-18 5h18m-9-10v5m-4.5 0v5m9-5v5m-4.5 0v5");
}
</style><path class="vqcxajkhq"/>`,
		"fallback": "uix-sharp:brick-bond",
	});
}

export default Component;
