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
		"content": `<style>.jgj-63bgm {
  fill: currentColor;
  d: path("M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10m-7.06-4.954l-4.5 10.5a.75.75 0 0 1-1.38-.591l4.5-10.5a.75.75 0 0 1 1.38.59m-6.188 3.261L6.872 12l1.88 1.693a.75.75 0 0 1-1.004 1.114l-2.5-2.25a.75.75 0 0 1 0-1.114l2.5-2.25a.75.75 0 0 1 1.004 1.114m6.44-1.059a.75.75 0 0 1 1.06-.055l2.5 2.25a.75.75 0 0 1 0 1.114l-2.5 2.25a.75.75 0 0 1-1.004-1.114L17.128 12l-1.88-1.693a.75.75 0 0 1-.055-1.059");
}
</style><path class="jgj-63bgm"/>`,
		"fallback": "fluent:code-circle-24-filled",
	});
}

export default Component;
