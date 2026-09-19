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
		"content": `<style>.tfl_ozbkl {
  fill: currentColor;
  d: path("m13.79 8l1.8-3l-1.8-3h-3.58l-1.8 3l1.8 3zm-3.58 1l-1.8 3l1.8 3h3.58l1.8-3l-1.8-3zm6.24 2.51h3.59l1.79-3l-1.79-3h-3.59l-1.8 3zm3.59 1h-3.59l-1.8 3l1.8 3h3.59l1.79-3zm-12.49-1l1.8-3l-1.8-3H3.96l-1.79 3l1.79 3zm0 1H3.96l-1.79 3l1.79 3h3.59l1.8-3zM10.21 16l-1.8 3l1.8 3h3.58l1.8-3l-1.8-3z");
}
</style><path class="tfl_ozbkl"/>`,
		"fallback": "ic:baseline-hive",
	});
}

export default Component;
