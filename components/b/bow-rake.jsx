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
		"content": `<style>.owaeqgb5y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5V11m-7 4.5Q5 11 12 11t7 4.5m-15 0h16m-15 0v5m3.5-5v5m3.5-5v5m3.5-5v5m3.5-5v5");
}
</style><path class="owaeqgb5y"/>`,
		"fallback": "uix:bow-rake",
	});
}

export default Component;
