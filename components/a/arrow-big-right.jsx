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
		"content": `<style>.nhk-j5-9e {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m19.174 14.386l-4.553 4.553q-.794.795-1.833.365T11.75 17.75q0-.621-.439-1.061q-.44-.439-1.061-.439H6.125q-3.375 0-3.375-3.375v-1.75q0-3.375 3.375-3.375h4.125q.621 0 1.061-.439q.439-.44.439-1.061q0-1.124 1.038-1.554t1.833.365l4.553 4.553q2.386 2.386 0 4.772");
}
</style><path class="nhk-j5-9e"/>`,
		"fallback": "uix-solid:arrow-big-right",
	});
}

export default Component;
