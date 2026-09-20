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
		"content": `<style>.qpyh7cklc {
  fill: currentColor;
  d: path("M4 10.5a4 4 0 1 0 5.75-3.598V5.284a5.5 5.5 0 1 1-3.5 0v1.618A4 4 0 0 0 4 10.5m7 0a3 3 0 0 0-1.25-2.437v2.187a1.75 1.75 0 1 1-3.5 0V8.063A3 3 0 1 0 11 10.5m-2.25-.25a.75.75 0 0 1-1.5 0V3.06L6.03 4.28a.75.75 0 0 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06L8.75 3.06z");
}
</style><path class="qpyh7cklc"/>`,
		"fallback": "fluent:double-tap-swipe-up-16-filled",
	});
}

export default Component;
