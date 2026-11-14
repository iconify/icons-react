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
		"content": `<style>.zo_5oh02n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 7.5h14v9H5ZM5 9c-2 0-2.5 1.5-2.5 3S3 15 5 15m14-6c2 0 2.5 1.5 2.5 3s-.5 3-2.5 3M8 10.5h8m-8 3h8");
}
</style><path class="zo_5oh02n"/>`,
		"fallback": "uix-sharp:face-mask",
	});
}

export default Component;
