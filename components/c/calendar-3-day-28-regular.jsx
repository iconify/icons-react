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
		"content": `<style>.im72stunh {
  fill: currentColor;
  d: path("M21.75 3A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3zm0 1.5H6.25A1.75 1.75 0 0 0 4.5 6.25v15.5c0 .966.784 1.75 1.75 1.75h15.5a1.75 1.75 0 0 0 1.75-1.75V6.25a1.75 1.75 0 0 0-1.75-1.75M14 8.25a.75.75 0 0 1 .743.648L14.75 9v10a.75.75 0 0 1-1.493.102L13.25 19V9a.75.75 0 0 1 .75-.75m5.25 0a.75.75 0 0 1 .743.648L20 9v10a.75.75 0 0 1-1.493.102L18.5 19V9a.75.75 0 0 1 .75-.75m-10.5 0a.75.75 0 0 1 .743.648L9.5 9v10a.75.75 0 0 1-1.493.102L8 19V9a.75.75 0 0 1 .75-.75");
}
</style><path class="im72stunh"/>`,
		"fallback": "fluent:calendar-3-day-28-regular",
	});
}

export default Component;
