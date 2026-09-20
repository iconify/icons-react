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
		"content": `<style>.at_kcz92e {
  fill: currentColor;
  d: path("M4.016 4.723a2 2 0 1 1 .707-.707l2.261 2.26A2 2 0 0 1 8 6c.37 0 .718.101 1.016.277l2.26-2.261a2 2 0 1 1 .707.707l-2.26 2.261a1.99 1.99 0 0 1 0 2.032l2.261 2.26a2 2 0 1 1-.707.707l-2.261-2.26A2 2 0 0 1 8 10a2 2 0 0 1-1.016-.277l-2.26 2.261a2 2 0 1 1-.707-.707l2.26-2.261A2 2 0 0 1 6 8c0-.37.101-.718.277-1.016z");
}
</style><path class="at_kcz92e"/>`,
		"fallback": "fluent:connected-16-filled",
	});
}

export default Component;
