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
		"content": `<style>.ryzn5qzsp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7h18v13H3Zm3-2.5V7m6-2.5V7m6-2.5V7M9 7v13m6-13v13");
}
</style><path class="ryzn5qzsp"/>`,
		"fallback": "uix-sharp:battery-pack-science",
	});
}

export default Component;
