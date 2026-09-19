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
		"content": `<style>.e-si2ocwh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.065 36.026a6.474 6.474 0 1 1-12.948 0a6.474 6.474 0 0 1 12.948 0m-8.324 0h2.405");
}

.rofzymbyf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.741 39.725v-7.399h3.7M8.6 42.5l13.947-27.972c2.47-4.955 9.052-11.01 16.852-8.4M11.587 18.119h20.194");
}
</style><path class="e-si2ocwh"/><path class="rofzymbyf"/>`,
		"fallback": "arcticons:freebox-files",
	});
}

export default Component;
