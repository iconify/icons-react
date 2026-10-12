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
		"content": `<style>.z62afx4kb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75a6.75 6.75 0 0 0-4 12.2V18h8v-3.05a6.75 6.75 0 0 0-4-12.2Zm-2.25 18.5h4.5m-4.75-9v-1.5m2.5 1.5v-4.5m2.5 4.5V9.5");
}
</style><path class="z62afx4kb"/>`,
		"fallback": "iconoven:analytics-insight-sharp",
	});
}

export default Component;
