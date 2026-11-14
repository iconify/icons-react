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
		"content": `<style>.vlmsw2bhx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21V7.5L4.75 5L6.5 7.5V21Zm7.25 0V5.5L12 3l1.75 2.5V21Zm7.25 0V7.5L19.25 5L21 7.5V21Zm-11-11h3.75m3.5 0h3.75m-11 6.5h3.75m3.5 0h3.75");
}
</style><path class="vlmsw2bhx"/>`,
		"fallback": "uix:garden-fence",
	});
}

export default Component;
