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
		"content": `<style>.ysulb0bqe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m16.25 3.75l1.323 2.93l3.195.352l-2.378 2.163l.652 3.148l-2.792-1.593l-2.792 1.593l.652-3.148l-2.378-2.163l3.195-.352ZM2.5 20.5l5-5l3 2.5l3.5-3.5");
}
</style><path class="ysulb0bqe"/>`,
		"fallback": "uix-sharp:high-potential",
	});
}

export default Component;
