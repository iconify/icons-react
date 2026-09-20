import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qf--1d7bj {
  fill: currentColor;
  d: path("M17.921 15.77a.5.5 0 0 1-.421.23h-6a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .954-.21l6 13a.5.5 0 0 1-.033.48M12 4.777V15h4.718zM2.5 16a.5.5 0 0 1-.454-.71l6-13A.5.5 0 0 1 9 2.5v13a.5.5 0 0 1-.5.5z");
}
</style><path class="qf--1d7bj"/>`,
		"fallback": "fluent:flip-horizontal-20-regular",
	});
}

export default Component;
