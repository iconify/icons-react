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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.h9m3co9vh {
  d: path("M21 12.022V8.5H3v9.25A3.25 3.25 0 0 0 6.25 21h5.772A6.5 6.5 0 0 1 21 12.022z");
  fill: currentColor;
}

.w_6lwrujz {
  d: path("M21 6.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25V7h18v-.75z");
  fill: currentColor;
}

.zle4cq05a {
  d: path("M23 17.5a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0zm-6-3a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0v-4zm1.125 6a.625.625 0 1 1-1.25 0a.625.625 0 0 1 1.25 0z");
  fill: currentColor;
}
</style><g class="ft5dv1b6b"><path class="h9m3co9vh"/><path class="w_6lwrujz"/><path class="zle4cq05a"/></g>`,
		"fallback": "fluent:calendar-overdue-24-filled",
	});
}

export default Component;
