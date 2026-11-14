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
		"content": `<style>.li0p3mbdp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.772 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c1.478 0 2.835.272 3.976.764M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm13 7v2.5H22a2.5 2.5 0 1 1-2.5-2.5Zm-4 7.5l2.25-3.25");
}
</style><path class="li0p3mbdp"/>`,
		"fallback": "uix-sharp:engineer-hotel",
	});
}

export default Component;
