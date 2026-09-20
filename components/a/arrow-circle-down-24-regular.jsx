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
		"content": `<style>.pemdzz56r {
  fill: currentColor;
  d: path("m16.53 11.72l-.084-.073a.75.75 0 0 0-.977.073l-2.72 2.72V7.75l-.007-.102A.75.75 0 0 0 12 7l-.101.006a.75.75 0 0 0-.649.744v6.691L8.53 11.72l-.084-.072a.75.75 0 0 0-.977 1.133l4 4.001l.084.073a.75.75 0 0 0 .977-.073l4-4l.073-.085a.75.75 0 0 0-.072-.976M1.999 12c0 5.523 4.477 10 10 10s10-4.477 10-10s-4.477-10-10-10s-10 4.477-10 10m18.5 0a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0");
}
</style><path class="pemdzz56r"/>`,
		"fallback": "fluent:arrow-circle-down-24-regular",
	});
}

export default Component;
