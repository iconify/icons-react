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
		"content": `<style>.nfm7oobmp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 12c-3-6.5-9.5-6.5-9.5 0S9 18.5 12 12m0 0c3-6.5 9.5-6.5 9.5 0S15 18.5 12 12");
}
</style><path class="nfm7oobmp"/>`,
		"fallback": "uix:infinity-loop-science",
	});
}

export default Component;
