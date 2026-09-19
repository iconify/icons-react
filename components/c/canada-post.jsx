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
		"content": `<style>.an5em3qwf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.01 24.935L4.5 10.792l39 13.325L30.27 36.63l-25.77.579zm20.265-.461l-20.266.461m16.442 3.641l-20.267.461m16.443 3.641l-20.269.461");
}
</style><path class="an5em3qwf"/>`,
		"fallback": "arcticons:canada-post",
	});
}

export default Component;
