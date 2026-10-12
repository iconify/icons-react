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
		"content": `<style>.qn03hrb5e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.68 11.2l-3.01 3.01c-.71.7-2.3-.18-3.36.88a3.25 3.25 0 0 0 4.6 4.6c1.06-1.06.18-2.65.88-3.36l3.01-3.01a.5.5 0 0 0 0-.7l-1.42-1.42a.5.5 0 0 0-.7 0m-1.31 1.31l2.12 2.12m.6-2.72l8.66-8.66");
}
</style><path class="qn03hrb5e"/>`,
		"fallback": "iconoven:awl",
	});
}

export default Component;
