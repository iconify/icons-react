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
		"content": `<style>.xhypn-byh {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.25 7q0-2.303 2.725-3.836Q8.49 1.75 12 1.75t6.025 1.414Q20.75 4.697 20.75 7t-2.725 3.836q-.566.318-1.181.564q1.184.354 2.223.901q3.183 1.675 3.183 4.199t-3.183 4.199Q16.12 22.25 12 22.25t-7.067-1.551Q1.75 19.024 1.75 16.5t3.183-4.199q1.039-.547 2.223-.901q-.615-.246-1.181-.564Q3.25 9.303 3.25 7m3 9.5q0-2.75 5.75-2.75t5.75 2.75T12 19.25T6.25 16.5");
}
</style><path class="xhypn-byh"/>`,
		"fallback": "uix-solid:eyeshadow-single",
	});
}

export default Component;
