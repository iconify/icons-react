import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j8kviob5q {
  fill: currentColor;
  d: path("M216 50H40a14 14 0 0 0-14 14v160a13.88 13.88 0 0 0 8.09 12.69A14.1 14.1 0 0 0 40 238a13.87 13.87 0 0 0 9-3.31l.06-.05L82.23 206H216a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14m2 142a2 2 0 0 1-2 2H80a6 6 0 0 0-3.92 1.46l-34.82 30.07A2 2 0 0 1 38 224V64a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Z");
}
</style><path class="j8kviob5q"/>`,
		"fallback": "ph:chat-light",
	});
}

export default Component;
