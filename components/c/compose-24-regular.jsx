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
		"content": `<style>.xyh9nnbza {
  fill: currentColor;
  d: path("M13.25 4a.75.75 0 0 1 0 1.5h-7A1.75 1.75 0 0 0 4.5 7.25v10.5c0 .966.784 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75v-7a.75.75 0 0 1 1.5 0v7A3.25 3.25 0 0 1 16.75 21H6.25A3.25 3.25 0 0 1 3 17.75V7.25A3.25 3.25 0 0 1 6.25 4zm6.47-.78a.75.75 0 1 1 1.06 1.06L10.59 14.47L9 15l.53-1.59z");
}
</style><path class="xyh9nnbza"/>`,
		"fallback": "fluent:compose-24-regular",
	});
}

export default Component;
