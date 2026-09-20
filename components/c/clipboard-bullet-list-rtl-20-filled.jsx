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
		"content": `<style>.cxog8ob3v {
  fill: currentColor;
  d: path("M8.5 2h3a1.5 1.5 0 0 1 1.415 1H14.5A1.5 1.5 0 0 1 16 4.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-12A1.5 1.5 0 0 1 5.5 3h1.585A1.5 1.5 0 0 1 8.5 2M8 3.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5m4.75 5.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m0 3a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M12 14.5a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0m-1-6a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 .5-.5m0 3a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 .5-.5m0 3a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 .5-.5");
}
</style><path class="cxog8ob3v"/>`,
		"fallback": "fluent:clipboard-bullet-list-rtl-20-filled",
	});
}

export default Component;
