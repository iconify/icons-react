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
		"content": `<style>.x1nvnzbxh {
  fill: currentColor;
  d: path("M4 2a2 2 0 0 0-2 2v4h1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v4h1V4a2 2 0 0 0-2-2zM2 13v-2h1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2h1v2a2 2 0 0 1-2 2h-3v2h1.5a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1H7v-2H4a2 2 0 0 1-2-2m10 2H8v2h4zM7.977 4.35a.5.5 0 0 0-.941-.036L5.162 9H2.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .465-.314L7.442 5.99l2.08 6.658a.5.5 0 0 0 .925.075L13 7.618l1.052 2.106A.5.5 0 0 0 14.5 10h3a.5.5 0 1 0 0-1h-2.691l-1.362-2.724a.5.5 0 0 0-.894 0l-2.446 4.891z");
}
</style><path class="x1nvnzbxh"/>`,
		"fallback": "fluent:desktop-pulse-20-regular",
	});
}

export default Component;
