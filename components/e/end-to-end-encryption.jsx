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
		"content": `<style>.ichwwrbvc {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.375 5.25h-.25q-3.375 0-3.375 3.375v6.75q0 3.375 3.375 3.375h.25q3.274 0 3.372-3.175Q9.286 16.75 11 16.75h2q1.714 0 2.253-1.175q.098 3.175 3.372 3.175h.25q3.375 0 3.375-3.375v-6.75q0-3.375-3.375-3.375h-.25q-3.375 0-3.375 3.375v2.794q-.25-.541-.75-.831V9.75q0-1.036-.732-1.768T12 7.25q-2.5 0-2.5 2.5v.838q-.5.29-.75.831V8.625q0-3.375-3.375-3.375m5.625 5v-.5q0-1 1-1q.414 0 .707.293T13 9.75v.5z");
}
</style><path class="ichwwrbvc"/>`,
		"fallback": "uix-solid:end-to-end-encryption",
	});
}

export default Component;
