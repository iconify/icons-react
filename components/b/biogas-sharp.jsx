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
		"content": `<style>.xtv8us1ap {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 21.25v-4a9.25 6 0 0 1 18.5 0v4ZM6 18h12M12 2.75c1.5 1.5 2.25 2.5 2.25 3.75a2.25 2.25 0 0 1-4.5 0c0-1.25.75-2.25 2.25-3.75Z");
}
</style><path class="xtv8us1ap"/>`,
		"fallback": "iconoven:biogas-sharp",
	});
}

export default Component;
