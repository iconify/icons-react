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
		"content": `<style>.n4glkmbbk {
  fill: currentColor;
  d: path("M20 10V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L4 19h1l.67-2h12.67l.66 2h1l.67-2H22v-5c0-1.1-.9-2-2-2m-9 0H6V7h5zm7 0h-5V7h5z");
}
</style><path class="n4glkmbbk"/>`,
		"fallback": "ic:baseline-king-bed",
	});
}

export default Component;
