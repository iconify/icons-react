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
		"content": `<style>.qdfcdb7yr {
  fill: currentColor;
  d: path("M3 8.5v9.25A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V8.5zM16.75 15a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5M12 15a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m4.75-4.5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m-4.75 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m-4.75 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m-1-7.5A3.25 3.25 0 0 0 3 6.25V7h18v-.75A3.25 3.25 0 0 0 17.75 3z");
}
</style><path class="qdfcdb7yr"/>`,
		"fallback": "fluent:calendar-rtl-24-filled",
	});
}

export default Component;
