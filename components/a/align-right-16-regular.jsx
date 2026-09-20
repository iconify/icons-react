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
		"content": `<style>.vt9372v1p {
  fill: currentColor;
  d: path("M14 1.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0zm-3.75.5c.966 0 1.75.784 1.75 1.75v1.5A1.75 1.75 0 0 1 10.25 7h-6.5A1.75 1.75 0 0 1 2 5.25v-1.5C2 2.784 2.784 2 3.75 2zM11 3.75a.75.75 0 0 0-.75-.75h-6.5a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75h6.5a.75.75 0 0 0 .75-.75zM10.25 9c.966 0 1.75.784 1.75 1.75v1.5A1.75 1.75 0 0 1 10.25 14h-4.5A1.75 1.75 0 0 1 4 12.25v-1.5C4 9.784 4.784 9 5.75 9zm.75 1.75a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75z");
}
</style><path class="vt9372v1p"/>`,
		"fallback": "fluent:align-right-16-regular",
	});
}

export default Component;
