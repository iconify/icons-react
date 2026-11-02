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
		"content": `<style>.zc0tz1cqs {
  fill: currentColor;
  d: path("M6 3h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2m1.293 13.707a.999.999 0 1 1 1.414-1.414L11 17.586V8a1 1 0 0 1 2 0v9.586l2.293-2.293a.999.999 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0Z");
}
</style><path class="zc0tz1cqs"/>`,
		"fallback": "coolicons:arrow-down-from-line-fill-round",
	});
}

export default Component;
