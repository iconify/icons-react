import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hirkhhb8m {
  fill: currentColor;
  d: path("M27.5 20.5v-9a6 6 0 0 0-6-6h-14q-.123 0-.246.005A4.5 4.5 0 0 1 11 3.5h10.5a8 8 0 0 1 8 8V17a4.5 4.5 0 0 1-2.005 3.746q.005-.123.005-.246M3 11.5A4.5 4.5 0 0 1 7.5 7h14a4.5 4.5 0 0 1 4.5 4.5v9a4.5 4.5 0 0 1-4.5 4.5h-4.89l-6.205 4.692C9.417 30.439 8 29.734 8 28.495V25h-.5A4.5 4.5 0 0 1 3 20.5z");
}
</style><path class="hirkhhb8m"/>`,
		"fallback": "fluent:comment-multiple-32-filled",
	});
}

export default Component;
