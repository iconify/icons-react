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
		"content": `<style>.ka_kvwb0n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 4.5c-1.5-1-3-.25-3.25 1.5L6.5 17.5C6.3 19.25 5.25 19.75 4 19m.5-8.5h6m3 1l7 7.5m0-7.5l-7 7.5");
}
</style><path class="ka_kvwb0n"/>`,
		"fallback": "uix:function-fx",
	});
}

export default Component;
