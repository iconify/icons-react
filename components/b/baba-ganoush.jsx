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
		"content": `<style>.iwnivjo1f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.18 19.498L12 19.5c-5 0-9-3.5-9-9h18q0 .218-.008.431M7.5 7C9 4.5 11 4.5 12 6.5s3 2 4.5-.5m3 9c2 1.5 2 6.5-2.5 6.5c-2.5 0-2.75-2.75-.5-3.75c1.5-.75 2-1.75 3-2.75m0 0l1.25-1.25");
}
</style><path class="iwnivjo1f"/>`,
		"fallback": "uix:baba-ganoush",
	});
}

export default Component;
