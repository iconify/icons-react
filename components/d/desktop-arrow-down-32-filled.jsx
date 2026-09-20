import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.r9qnz4bky {
  fill: currentColor;
  d: path("M23.5 16a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m1-12.25v7.69l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 1.06-1.06L23 11.44V3.75a.75.75 0 0 1 1.5 0m-1 13.75a8.97 8.97 0 0 0 6.5-2.775v7.025A3.25 3.25 0 0 1 26.75 25h-6.744v2.001h2.998a1 1 0 1 1 0 1.999H9.012a1 1 0 1 1 0-1.999h2.998V25H5.25A3.25 3.25 0 0 1 2 21.75V6.25A3.25 3.25 0 0 1 5.25 3h11.125A9 9 0 0 0 23.5 17.5M14.01 25v2.001h3.996V25z");
}
</style><path class="r9qnz4bky"/>`,
		"fallback": "fluent:desktop-arrow-down-32-filled",
	});
}

export default Component;
