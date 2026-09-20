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
		"content": `<style>.du8oiebij {
  fill: currentColor;
  d: path("M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5V9H3zM3 11v13.5A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5V11zm18.5 7a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M20 21.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0M16 23a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m-1.5-6.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m-4 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3");
}
</style><path class="du8oiebij"/>`,
		"fallback": "fluent:calendar-rtl-32-filled",
	});
}

export default Component;
