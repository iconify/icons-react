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
		"content": `<style>.hsenq4n8s {
  fill: currentColor;
  d: path("M6.25 25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3h15.5A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25zm2.5-5.25a.75.75 0 0 0 .743-.648L9.5 19V9l-.007-.102a.75.75 0 0 0-1.486 0L8 9v10l.007.102a.75.75 0 0 0 .743.648");
}
</style><path class="hsenq4n8s"/>`,
		"fallback": "fluent:calendar-week-start-28-filled",
	});
}

export default Component;
