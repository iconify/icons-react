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
		"content": `<style>.flpf_jbql {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2 2V20M6 9.5h7M3.5 13c0 4 2.75 7 6 7c1.767 0 3.386-.887 4.495-2.338m1.422-3.477Q15.5 13.61 15.5 13m.25 7.25h5.5m-4.5 0V17.5a1.75 1.75 0 0 1 3.5 0v2.75");
}
</style><path class="flpf_jbql"/>`,
		"fallback": "uix:anchor-watch",
	});
}

export default Component;
