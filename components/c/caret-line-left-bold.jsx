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
		"content": `<style>.b9a4hgbuz {
  fill: currentColor;
  d: path("M200.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L129 128ZM72 36a12 12 0 0 0-12 12v160a12 12 0 0 0 24 0V48a12 12 0 0 0-12-12");
}
</style><path class="b9a4hgbuz"/>`,
		"fallback": "ph:caret-line-left-bold",
	});
}

export default Component;
