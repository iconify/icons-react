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
		"content": `<style>.m56_xo_5e {
  fill: currentColor;
  d: path("M24 102h26v68H32a6 6 0 0 0 0 12h192a6 6 0 0 0 0-12h-18v-68h26a6 6 0 0 0 3.14-11.11l-104-64a6 6 0 0 0-6.28 0l-104 64A6 6 0 0 0 24 102m38 0h36v68H62Zm84 0v68h-36v-68Zm48 68h-36v-68h36ZM128 39l82.8 51H45.2Zm118 169a6 6 0 0 1-6 6H16a6 6 0 0 1 0-12h224a6 6 0 0 1 6 6");
}
</style><path class="m56_xo_5e"/>`,
		"fallback": "ph:bank-light",
	});
}

export default Component;
