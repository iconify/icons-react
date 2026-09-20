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
		"content": `<style>.gx_ml3bku {
  fill: currentColor;
  d: path("M20.505 14a6.5 6.5 0 1 1-3.148 12.189l-2.716.79a.5.5 0 0 1-.62-.62l.794-2.714A6.5 6.5 0 0 1 20.505 14M21.75 3A3.25 3.25 0 0 1 25 6.25v8.245a7.5 7.5 0 0 0-1.5-.872v-4.12h-19V21.75c0 .966.784 1.75 1.75 1.75h7.383q.053.125.111.249L13.378 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3zm-3.745 18a.5.5 0 1 0 0 1h2.5a.5.5 0 0 0 0-1zm0-2a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1zM6.25 4.5A1.75 1.75 0 0 0 4.5 6.25v1.753h19V6.25a1.75 1.75 0 0 0-1.75-1.75z");
}
</style><path class="gx_ml3bku"/>`,
		"fallback": "fluent:calendar-chat-28-regular",
	});
}

export default Component;
