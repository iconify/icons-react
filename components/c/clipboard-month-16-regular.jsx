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
		"content": `<style>.pcit-sozm {
  fill: currentColor;
  d: path("M5.75 8a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m.75 1.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M10.25 8a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m-1.5-.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M8 10.5A.75.75 0 1 0 8 9a.75.75 0 0 0 0 1.5M6.5 1a1.5 1.5 0 0 0-1.415 1H4.5A1.5 1.5 0 0 0 3 3.5v10A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 11.5 2h-.585A1.5 1.5 0 0 0 9.5 1zM6 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M4.5 3h.585A1.5 1.5 0 0 0 6.5 4h3a1.5 1.5 0 0 0 1.415-1h.585a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5");
}
</style><path class="pcit-sozm"/>`,
		"fallback": "fluent:clipboard-month-16-regular",
	});
}

export default Component;
