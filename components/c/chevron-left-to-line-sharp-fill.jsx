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
		"content": `<style>.hkhvltb1l {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 4V20M17.293 5.71L11 12L17.293 18.29");
}
</style><path class="hkhvltb1l"/>`,
		"fallback": "keyline-icons:chevron-left-to-line-sharp-fill",
	});
}

export default Component;
