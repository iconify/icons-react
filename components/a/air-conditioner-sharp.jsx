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
		"content": `<style>.wvi73bcbj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3h18v8H3Zm4 5h10m-9 7a3 3 0 0 1-3 3m11-3a3 3 0 0 0 3 3m-7-3v6");
}
</style><path class="wvi73bcbj"/>`,
		"fallback": "coolicons:air-conditioner-sharp",
	});
}

export default Component;
