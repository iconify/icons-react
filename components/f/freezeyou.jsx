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
		"content": `<style>.aifeoxcub {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 38.024c1.033-3.529 3.47-8.057 5.986-8.057c4.772 0 6.409 10.55 13.674 10.55c7.844 0 16.475-15.047 17.34-33.033");
}
</style><path class="aifeoxcub"/>`,
		"fallback": "arcticons:freezeyou",
	});
}

export default Component;
