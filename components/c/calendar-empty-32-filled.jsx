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
		"content": `<style>.v7rwtv51b {
  fill: currentColor;
  d: path("M7.5 3A4.5 4.5 0 0 0 3 7.5V9h26V7.5A4.5 4.5 0 0 0 24.5 3zM29 11H3v13.5A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5z");
}
</style><path class="v7rwtv51b"/>`,
		"fallback": "fluent:calendar-empty-32-filled",
	});
}

export default Component;
