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
		"content": `<style>.yqitu1e2z {
  fill: currentColor;
  d: path("M6.25 25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3h15.5A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25zm0-1.5h15.5a1.75 1.75 0 0 0 1.75-1.75V6.25a1.75 1.75 0 0 0-1.75-1.75H6.25A1.75 1.75 0 0 0 4.5 6.25v15.5c0 .966.784 1.75 1.75 1.75m2.5-3.75a.75.75 0 0 1-.743-.648L8 19V9a.75.75 0 0 1 1.493-.102L9.5 9v10a.75.75 0 0 1-.75.75");
}
</style><path class="yqitu1e2z"/>`,
		"fallback": "fluent:calendar-week-start-28-regular",
	});
}

export default Component;
