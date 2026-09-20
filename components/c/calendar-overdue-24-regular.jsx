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
		"content": `<style>.adpj7f0md {
  d: path("M23 17.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0zM17.5 14a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5zm0 7.125a.625.625 0 1 0 0-1.25a.625.625 0 0 0 0 1.25z");
  fill: currentColor;
}

.ft5dv1b6b {
  fill: none;
}

.qrei605sx {
  d: path("M17.75 3A3.25 3.25 0 0 1 21 6.25v5.772a6.471 6.471 0 0 0-1.5-.709V8.5h-15v9.25c0 .966.784 1.75 1.75 1.75h5.063c.173.534.412 1.037.709 1.5H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h11.5zm0 1.5H6.25A1.75 1.75 0 0 0 4.5 6.25V7h15v-.75a1.75 1.75 0 0 0-1.75-1.75z");
  fill: currentColor;
}
</style><g class="ft5dv1b6b"><path class="qrei605sx"/><path class="adpj7f0md"/></g>`,
		"fallback": "fluent:calendar-overdue-24-regular",
	});
}

export default Component;
