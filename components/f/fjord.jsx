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
		"content": `<style>.x2ex0zw9l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 20.35V4.9q0-.9.86-1.16l1.53-.48Q6 3 6.55 3.71L9.7 7.79q.55.71.3 1.57L6.75 20.39q-.25.86-1.15.86H3.65q-.9 0-.9-.9m18.5 0V6.9q0-.9-.86-1.16l-1.53-.48Q18 5 17.31 5.57l-2.87 2.36q-.69.57-.44 1.43l3.25 11.03q.25.86 1.15.86h1.95q.9 0 .9-.9m-11-1.6c.58-.5 1.17-.5 1.75 0s1.17.5 1.75 0m-2.75-4c.33-.4.67-.4 1 0s.67.4 1 0");
}
</style><path class="x2ex0zw9l"/>`,
		"fallback": "iconoven:fjord",
	});
}

export default Component;
