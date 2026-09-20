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
		"content": `<style>.dw8lag9uu {
  fill: currentColor;
  d: path("M6 1.75a.75.75 0 0 0-1.5 0v.5A2.25 2.25 0 0 0 6.75 4.5h10A2.25 2.25 0 0 0 19 2.25v-.5a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 1-.75.75h-10A.75.75 0 0 1 6 2.25zM11.75 6a.75.75 0 0 1 .75.75v8.69l3.72-3.72a.75.75 0 1 1 1.06 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06L11 15.44V6.75a.75.75 0 0 1 .75-.75M4.5 21.75a2.25 2.25 0 0 1 2.25-2.25h10A2.25 2.25 0 0 1 19 21.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 0-.75-.75h-10a.75.75 0 0 0-.75.75v.5a.75.75 0 0 1-1.5 0z");
}
</style><path class="dw8lag9uu"/>`,
		"fallback": "fluent:arrow-between-down-24-regular",
	});
}

export default Component;
