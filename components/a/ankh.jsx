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
		"content": `<style>.nwyr7phng {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 12c-2-1.25-3.5-3.25-3.5-5a3.5 3.5 0 0 1 7 0c0 1.75-1.5 3.75-3.5 5m0 0v8.25m-6.5-7.5h13");
}
</style><path class="nwyr7phng"/>`,
		"fallback": "iconoven:ankh",
	});
}

export default Component;
