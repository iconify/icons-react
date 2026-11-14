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
		"content": `<style>.mzevdnbfn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16h19m-11 0c4.5 0 6-9 11-9m-17 7v4m3.25-4v4M18 14v4");
}
</style><path class="mzevdnbfn"/>`,
		"fallback": "uix:branch-line",
	});
}

export default Component;
