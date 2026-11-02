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
		"content": `<style>.ddcg6pbyo {
  fill: currentColor;
  d: path("M5 5h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m4.236 5.832a3 3 0 1 0 5.527 2.335a3 3 0 0 0-5.527-2.335M7 11a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm10.01 0H17a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="ddcg6pbyo"/>`,
		"fallback": "coolicons:banknote-fill",
	});
}

export default Component;
