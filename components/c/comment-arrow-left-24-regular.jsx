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
		"content": `<style>.yask5yb5q {
  fill: currentColor;
  d: path("M17.5 12a5.5 5.5 0 1 1 0-11a5.5 5.5 0 0 1 0 11m3-5a.5.5 0 0 0 0-1h-4.793l1.647-1.646a.5.5 0 0 0-.708-.708l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 0 0 .708-.708L15.707 7zm0 7.75v-2.482A6.5 6.5 0 0 0 22 11.19v3.56A3.25 3.25 0 0 1 18.75 18h-5.738L8 21.75a1.25 1.25 0 0 1-1.999-1V18h-.75A3.25 3.25 0 0 1 2 14.75v-8.5A3.25 3.25 0 0 1 5.25 3h6.772a6.5 6.5 0 0 0-.709 1.5H5.25A1.75 1.75 0 0 0 3.5 6.25v8.5c0 .966.784 1.75 1.75 1.75h2.249v3.75l5.015-3.75h6.236a1.75 1.75 0 0 0 1.75-1.75");
}
</style><path class="yask5yb5q"/>`,
		"fallback": "fluent:comment-arrow-left-24-regular",
	});
}

export default Component;
