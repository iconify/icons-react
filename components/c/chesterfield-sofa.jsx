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
		"content": `<style>.bxml3dbuv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 18.5V9a2.5 2.5 0 0 1 5 0V4.5h9V9a2.5 2.5 0 0 1 5 0v9.5Zm5-9.5v9.5m9-9.5v9.5m-9-5.5h9m-12 5.5v2m15-2v2");
}
</style><path class="bxml3dbuv"/>`,
		"fallback": "uix-sharp:chesterfield-sofa",
	});
}

export default Component;
