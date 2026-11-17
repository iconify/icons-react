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
		"content": `<style>.zok9pkb0w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 7a4 4 0 0 1 4-4h10a4 4 0 1 1 0 8H7a4 4 0 0 1-4-4m4 1h10m-9 7a3 3 0 0 1-3 3m11-3a3 3 0 0 0 3 3m-7-3v6");
}
</style><path class="zok9pkb0w"/>`,
		"fallback": "coolicons:air-conditioner-round",
	});
}

export default Component;
