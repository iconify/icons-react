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
		"content": `<style>.uuuprabso {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M44.404 17.226c3.57 10.75-1.816 22.428-12.31 26.692s-22.499-.346-27.44-10.54C-.29 23.187 3.526 10.907 13.374 5.309s22.351-2.594 28.581 6.867l-16.48 21.823l-11.511-6.646");
}
</style><path class="uuuprabso"/>`,
		"fallback": "arcticons:fakespot",
	});
}

export default Component;
