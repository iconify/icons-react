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
		"content": `<style>.hg-wuishg {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M22 1V23M18 4V10H10V4H18ZM18 14V20H2V14H18Z");
}
</style><path class="hg-wuishg"/>`,
		"fallback": "keyline-icons:align-end-vertical-sharp",
	});
}

export default Component;
