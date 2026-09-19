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
		"content": `<style>.dh5nuddxy {
  cx: 14px;
  cy: 14px;
  r: 8.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.fat9v2b0n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.5 25.5h17v17h-17zm-3 17a17 17 0 0 1-17-17h17z");
}

.m09of8bhh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.5 5.5v9H27l7 8l7-8h-3.5v-9z");
}
</style><path class="fat9v2b0n"/><circle class="dh5nuddxy"/><path class="m09of8bhh"/>`,
		"fallback": "arcticons:downloader-for-gcam",
	});
}

export default Component;
