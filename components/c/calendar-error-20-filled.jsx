import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.itksqtbhs {
  fill: currentColor;
  d: path("M5.5 3A2.5 2.5 0 0 0 3 5.5V6h14v-.5A2.5 2.5 0 0 0 14.5 3zM17 7H3v7.5A2.5 2.5 0 0 0 5.5 17h4.1A5.5 5.5 0 0 1 17 9.6zm2 7.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5m0 5.125a.625.625 0 1 0 0-1.25a.625.625 0 0 0 0 1.25");
}
</style><path class="itksqtbhs"/>`,
		"fallback": "fluent:calendar-error-20-filled",
	});
}

export default Component;
