import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qy6tbdcoz {
  fill: currentColor;
  d: path("M6.008 24a3.25 3.25 0 0 0 2.74 1.5h11.5a5.25 5.25 0 0 0 5.25-5.25V8.75c0-1.15-.597-2.16-1.498-2.737V19q0 .09-.003.178v1.072a3.75 3.75 0 0 1-3.75 3.75zM3 6.25A3.25 3.25 0 0 1 6.25 3h13.5A3.25 3.25 0 0 1 23 6.25V7H3zM3 8.5v11.25A3.25 3.25 0 0 0 6.25 23h13.5A3.25 3.25 0 0 0 23 19.75V8.5z");
}
</style><path class="qy6tbdcoz"/>`,
		"fallback": "fluent:calendar-multiple-28-filled",
	});
}

export default Component;
