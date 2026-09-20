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
		"content": `<style>.gzo0w15mv {
  fill: currentColor;
  d: path("M21.75 3A3.25 3.25 0 0 1 25 6.25v8.812a4 4 0 0 0-1.5-1.527V9.503h-19V21.75c0 .966.784 1.75 1.75 1.75H15V25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3zm0 1.5H6.25A1.75 1.75 0 0 0 4.5 6.25v1.753h19V6.25a1.75 1.75 0 0 0-1.75-1.75M18.5 18H18a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-.5v-1a3 3 0 1 0-6 0zm1.5-1a1.5 1.5 0 0 1 3 0v1h-3zm3 5.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0");
}
</style><path class="gzo0w15mv"/>`,
		"fallback": "fluent:calendar-lock-28-regular",
	});
}

export default Component;
