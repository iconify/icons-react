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
		"content": `<style>.acljnjb_w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 5h14M9.5 5V3h5v2m-8 0L8 17h8l1.5-12m-15 12h19v4.5h-19Zm14 2.25h.01");
}
</style><path class="acljnjb_w"/>`,
		"fallback": "uix-sharp:bin-weighing",
	});
}

export default Component;
