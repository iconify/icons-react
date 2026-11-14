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
		"content": `<style>.puvxy6_zq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20c4.5 0 5.5-13.5 9-13.5S16.5 20 21 20M2.5 20h19M12 4v16");
}
</style><path class="puvxy6_zq"/>`,
		"fallback": "uix-sharp:batch-norm",
	});
}

export default Component;
