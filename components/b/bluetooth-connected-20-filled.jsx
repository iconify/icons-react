import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rnxideb_q {
  fill: currentColor;
  d: path("M10.28 2.22A.75.75 0 0 0 9 2.75v5.674L6.223 6.168a.75.75 0 1 0-.946 1.164L8.561 10l-3.284 2.668a.75.75 0 0 0 .946 1.164L9 11.576v5.674a.75.75 0 0 0 1.28.53l4-4a.75.75 0 0 0-.057-1.112L10.939 10l3.284-2.668a.75.75 0 0 0 .057-1.112zm.22 13.22v-3.864l2.132 1.732zm2.132-8.748L10.5 8.424V4.561zM4 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0m13 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0");
}
</style><path class="rnxideb_q"/>`,
		"fallback": "fluent:bluetooth-connected-20-filled",
	});
}

export default Component;
