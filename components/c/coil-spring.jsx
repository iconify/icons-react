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
		"content": `<style>.q0t3ambze {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.75h15m-15 18.5h15M7 2.75v2l10 3.63L7 12l10 3.63l-10 3.62v2");
}
</style><path class="q0t3ambze"/>`,
		"fallback": "iconoven:coil-spring",
	});
}

export default Component;
