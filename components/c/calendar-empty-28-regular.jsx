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
		"content": `<style>.jd9t-0ltu {
  fill: currentColor;
  d: path("M21.75 3A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3zm1.75 6.503h-19V21.75c0 .966.784 1.75 1.75 1.75h15.5a1.75 1.75 0 0 0 1.75-1.75zM21.75 4.5H6.25A1.75 1.75 0 0 0 4.5 6.25v1.753h19V6.25a1.75 1.75 0 0 0-1.75-1.75");
}
</style><path class="jd9t-0ltu"/>`,
		"fallback": "fluent:calendar-empty-28-regular",
	});
}

export default Component;
