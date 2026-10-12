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
		"content": `<style>.c137h6b6m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 9H11v6H2.75zm2.5 2v2m3.25-2v2m2.5-2.25l2 .75v1l-2 .75M13 12h8");
}
</style><path class="c137h6b6m"/>`,
		"fallback": "iconoven:hdmi-cable-sharp",
	});
}

export default Component;
