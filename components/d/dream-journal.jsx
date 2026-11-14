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
		"content": `<style>.bsd4jqb3l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 13.5c-2-1.5-5.5-2-9-1.5v8c3.5-.5 7 0 9 1.5c2-1.5 5.5-2 9-1.5v-8c-3.5-.5-7 0-9 1.5m0 0v8M13.75 3a3.75 3.75 0 1 0 1.5 5a3 3 0 0 1-1.5-5");
}
</style><path class="bsd4jqb3l"/>`,
		"fallback": "uix:dream-journal",
	});
}

export default Component;
