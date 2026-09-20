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
		"content": `<style>.pyg31qd7w {
  fill: currentColor;
  d: path("M4 9a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5v1H10.292a2.5 2.5 0 0 0-4.06-.768L6 9.464v2.122l1.293-1.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L4 11.586zm0 7.292V23a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V12H10.292c-.121.279-.296.54-.524.768l-3 3A2.5 2.5 0 0 1 4 16.292m8 .208a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M10.5 20a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m7 1.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M16 15a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m7 1.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0");
}
</style><path class="pyg31qd7w"/>`,
		"fallback": "fluent:calendar-arrow-counterclockwise-32-filled",
	});
}

export default Component;
