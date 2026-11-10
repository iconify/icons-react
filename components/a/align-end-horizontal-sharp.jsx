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
		"content": `<style>.dr9zglbqj {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M23 22H1M20 18H14V10H20V18ZM10 18H4V2H10V18Z");
}
</style><path class="dr9zglbqj"/>`,
		"fallback": "keyline-icons:align-end-horizontal-sharp",
	});
}

export default Component;
