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
		"content": `<style>.l5lrelrdx {
  fill: currentColor;
  d: path("M21.75 3A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3zM8.5 15.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m5.5 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-5.5-6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m5.5 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m5.5 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3");
}
</style><path class="l5lrelrdx"/>`,
		"fallback": "fluent:calendar-month-28-filled",
	});
}

export default Component;
