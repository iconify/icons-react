import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mua88u2un {
  fill: currentColor;
  d: path("M21.75 3A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3zM4.5 21.75c0 .966.784 1.75 1.75 1.75h15.5a1.75 1.75 0 0 0 1.75-1.75V9.503h-19zm13.47-9.03a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.004-1.112l.056.052l2.47 2.47zM6.25 4.5A1.75 1.75 0 0 0 4.5 6.25v1.753h19V6.25a1.75 1.75 0 0 0-1.75-1.75z");
}
</style><path class="mua88u2un"/>`,
		"fallback": "fluent:calendar-checkmark-center-28-regular",
	});
}

export default Component;
