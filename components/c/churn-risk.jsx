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
		"content": `<style>.j0ji-fbhg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.272 21H4.5c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c1.195 0 2.312.178 3.299.506M7 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0m12.324 8.982l1.5 2.812A1.5 1.5 0 0 1 19.5 21.5h-3a1.5 1.5 0 0 1-1.324-2.206l1.5-2.812a1.5 1.5 0 0 1 2.648 0M18 17.25v1M18 20h.01");
}
</style><path class="j0ji-fbhg"/>`,
		"fallback": "uix:churn-risk",
	});
}

export default Component;
