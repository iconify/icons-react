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
		"content": `<style>.xvv_s-bdq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 10a2.75 4 0 1 0 5.5 0a2.75 4 0 1 0-5.5 0Zm1 8.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm7-12a2.75 4 0 1 0 5.5 0a2.75 4 0 1 0-5.5 0Zm1 8.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}
</style><path class="xvv_s-bdq"/>`,
		"fallback": "uix-sharp:audit-walkthrough",
	});
}

export default Component;
