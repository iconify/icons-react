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
		"content": `<style>.umto51bin {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 16.5h18V21H3Zm3.5-7h11v4.25h-11ZM8 6.75L12 3l4 3.75");
}
</style><path class="umto51bin"/>`,
		"fallback": "uix-sharp:escalation-tier-2",
	});
}

export default Component;
