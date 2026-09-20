import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mr_t3vb1w {
  fill: currentColor;
  d: path("M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zm-10 10.5a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m4.25 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m-4.25-5a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m4.25 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m4.25 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5");
}
</style><path class="mr_t3vb1w"/>`,
		"fallback": "fluent:calendar-month-24-filled",
	});
}

export default Component;
