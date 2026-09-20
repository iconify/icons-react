import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t27eatkmf {
  fill: currentColor;
  d: path("M8 1a7 7 0 0 1 6.964 6.29a5.5 5.5 0 1 0-7.675 7.675a7 7 0 0 1-2.827-.926l-2.804.936a.5.5 0 0 1-.633-.633l.934-2.806A7 7 0 0 1 8 1m2.5 5a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m-.896 1.896a.5.5 0 0 0-.708 0l-1.75 1.75A.5.5 0 0 0 7 10c0 .135.05.256.145.352l1.751 1.752a.5.5 0 0 0 .708-.707l-.897-.897h1.543c.966 0 1.75.784 1.75 1.75v.25a.5.5 0 0 0 1 0v-.25a2.75 2.75 0 0 0-2.75-2.75H8.707l.897-.896a.5.5 0 0 0 0-.707");
}
</style><path class="t27eatkmf"/>`,
		"fallback": "fluent:chat-arrow-back-16-filled",
	});
}

export default Component;
