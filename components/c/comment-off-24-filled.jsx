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
		"content": `<style>.q-vv-abdp {
  fill: currentColor;
  d: path("M3.28 2.22a.75.75 0 1 0-1.06 1.06l.702.702A3.24 3.24 0 0 0 2 6.25v8.5A3.25 3.25 0 0 0 5.25 18H6v2.75c0 1.03 1.176 1.618 2 1L13 18h3.939l3.78 3.78a.75.75 0 0 0 1.061-1.06zM22 14.75a3.25 3.25 0 0 1-1.398 2.67L6.182 3H18.75A3.25 3.25 0 0 1 22 6.25z");
}
</style><path class="q-vv-abdp"/>`,
		"fallback": "fluent:comment-off-24-filled",
	});
}

export default Component;
