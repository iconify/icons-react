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
		"content": `<style>.sq4b56ltu {
  fill: currentColor;
  d: path("M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m1.354 3.646a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 1 0 .708-.707L6.707 8l2.647-2.646a.5.5 0 0 0 0-.708");
}
</style><path class="sq4b56ltu"/>`,
		"fallback": "fluent:chevron-circle-left-16-filled",
	});
}

export default Component;
