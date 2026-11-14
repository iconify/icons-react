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
		"content": `<style>.vp1c_6zni {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3.5H15c3 0 5 2.5 5 6m-9-6V18m-1.5-.5h3l-1.5 3Z");
}
</style><path class="vp1c_6zni"/>`,
		"fallback": "uix:ice-axe",
	});
}

export default Component;
