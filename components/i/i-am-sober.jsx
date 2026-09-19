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
		"content": `<style>.b-kp18bib {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m27.36 13.347l5.166 5.166h0L24 27.038h0l-8.525-8.525h0l5.165-5.166a4.75 4.75 0 0 1 6.72 0m4.256 21.305l-5.166-5.165h0l8.525-8.525h0l8.526 8.525h0l-5.166 5.165a4.75 4.75 0 0 1-6.72 0m-21.95 0L4.5 29.487h0l8.525-8.526h0l8.525 8.526h0l-5.165 5.165a4.75 4.75 0 0 1-6.72 0");
}
</style><path class="b-kp18bib"/>`,
		"fallback": "arcticons:i-am-sober",
	});
}

export default Component;
