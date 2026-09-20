import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rm8y3pv6k {
  fill: currentColor;
  d: path("M4.5 10.5a3.5 3.5 0 1 0 5-3.163v-1.08A4.502 4.502 0 0 1 8 15a4.5 4.5 0 0 1-1.5-8.744v1.08a3.5 3.5 0 0 0-2 3.164m6 0c0-.818-.393-1.544-1-2v2a1.5 1.5 0 0 1-3 0v-2a2.5 2.5 0 1 0 4 2m-2 0a.5.5 0 0 1-1 0V2.707L5.854 4.354a.5.5 0 1 1-.708-.708l2.5-2.5a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1-.708.708L8.5 2.707z");
}
</style><path class="rm8y3pv6k"/>`,
		"fallback": "fluent:double-tap-swipe-up-16-regular",
	});
}

export default Component;
