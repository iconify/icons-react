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
		"content": `<style>.ush0nccoq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 2.5L4 12h5.5L8 21l8-10.5h-5.5ZM15.75 16h4.5M18 13.75v4.5m-2.25 3h4.5");
}
</style><path class="ush0nccoq"/>`,
		"fallback": "uix:flash-compensation",
	});
}

export default Component;
