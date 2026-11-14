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
		"content": `<style>.j26utkbsq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 12h.01M3.5 3.5L9 9m0-3.5V9H5.5m15-5.5L15 9m3.5 0H15V5.5m5.5 15L15 15m0 3.5V15h3.5m-15 5.5L9 15m-3.5 0H9v3.5");
}
</style><path class="j26utkbsq"/>`,
		"fallback": "uix:arrows-in",
	});
}

export default Component;
