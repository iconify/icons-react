import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.v438ydbrm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.25 35.258V12.742M24 29.629L4.5 18.371m0 11.258L24 18.371m9.75 16.887V12.742m9.75 16.887L24 18.371m0 11.258l19.5-11.258");
}
</style><path class="v438ydbrm"/>`,
		"fallback": "arcticons:are-na",
	});
}

export default Component;
