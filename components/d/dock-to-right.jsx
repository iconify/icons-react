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
		"content": `<style>.f6xkjfbgb {
  fill: currentColor;
  d: path("M5.616 20q-.672 0-1.144-.472T4 18.385V5.615q0-.67.472-1.143Q4.944 4 5.616 4h12.769q.67 0 1.143.472q.472.472.472 1.144v12.769q0 .67-.472 1.143q-.472.472-1.143.472zM9 19h9.385q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T18.384 5H9z");
}
</style><path class="f6xkjfbgb"/>`,
		"fallback": "material-symbols-light:dock-to-right",
	});
}

export default Component;
