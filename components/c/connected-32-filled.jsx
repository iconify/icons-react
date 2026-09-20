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
		"content": `<style>.k3inrab9c {
  fill: currentColor;
  d: path("M11 6.5a4.5 4.5 0 0 1-.69 2.396l3.294 3.294A4.5 4.5 0 0 1 16 11.5c.88 0 1.702.253 2.396.69l3.294-3.294a4.5 4.5 0 1 1 1.414 1.414l-3.294 3.294A4.5 4.5 0 0 1 20.5 16a4.5 4.5 0 0 1-.69 2.396l3.294 3.294a4.5 4.5 0 1 1-1.414 1.414l-3.294-3.294A4.5 4.5 0 0 1 16 20.5a4.5 4.5 0 0 1-2.396-.69l-3.294 3.294a4.5 4.5 0 1 1-1.414-1.414l3.294-3.294A4.5 4.5 0 0 1 11.5 16c0-.88.253-1.702.69-2.396L8.896 10.31A4.5 4.5 0 1 1 11 6.5");
}
</style><path class="k3inrab9c"/>`,
		"fallback": "fluent:connected-32-filled",
	});
}

export default Component;
