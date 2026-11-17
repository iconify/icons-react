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
		"content": `<style>.hbe_bibsd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm3 10v2m12-2v2m-4-10h3m-3 4h3M5 7V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2M9 10l-3 3h4l-3 3");
}
</style><path class="hbe_bibsd"/>`,
		"fallback": "coolicons:generator",
	});
}

export default Component;
