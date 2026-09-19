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
		"content": `<style>.r9mvvpbbw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.544 9.044L24 3.5L10.333 17.167L24 30.833l13.667-13.666l-5.545-5.545");
}

.xk6v1sbnn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 17.166l13.667 13.667L24 44.5L10.333 30.833zm7.198-4.62l1.848-1.848");
}
</style><path class="r9mvvpbbw"/><path class="xk6v1sbnn"/>`,
		"fallback": "arcticons:fate-go",
	});
}

export default Component;
