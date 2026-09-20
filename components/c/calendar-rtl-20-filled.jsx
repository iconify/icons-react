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
		"content": `<style>.vrr2fpbjl {
  fill: currentColor;
  d: path("M14.5 3A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3zM3 7h14v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5zm9 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0m1 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-4-4a1 1 0 1 0 2 0a1 1 0 0 0-2 0m1 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-4-4a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}
</style><path class="vrr2fpbjl"/>`,
		"fallback": "fluent:calendar-rtl-20-filled",
	});
}

export default Component;
