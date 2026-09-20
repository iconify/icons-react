import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fnejtzbmx {
  fill: currentColor;
  d: path("M6.231 1.232a2.5 2.5 0 0 1 3.537 0l4.999 5c.976.976.976 2.56 0 3.536l-5 4.999a2.5 2.5 0 0 1-3.536 0l-4.999-5a2.5 2.5 0 0 1 0-3.536zm2.83.707a1.5 1.5 0 0 0-2.122 0l-5 5a1.5 1.5 0 0 0 0 2.122l5 4.999a1.5 1.5 0 0 0 2.122 0l4.999-5a1.5 1.5 0 0 0 0-2.121zm.836 3.458a.5.5 0 1 1 .707.707L8.707 8l1.897 1.897a.5.5 0 0 1-.707.707L8 8.707l-1.896 1.897a.5.5 0 0 1-.707-.707L7.293 8L5.397 6.104a.5.5 0 1 1 .707-.707L8 7.293z");
}
</style><path class="fnejtzbmx"/>`,
		"fallback": "fluent:diamond-dismiss-16-regular",
	});
}

export default Component;
