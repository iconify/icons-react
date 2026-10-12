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
		"content": `<style>.wbo9srbso {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 15.5V6.25h10.5v9.25h4V19H2.75v-3.5H4.5Zm0-2.75h10.5");
}
</style><path class="wbo9srbso"/>`,
		"fallback": "iconoven:bowler-hat-sharp",
	});
}

export default Component;
