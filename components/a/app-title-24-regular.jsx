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
		"content": `<style>.f1lrjgb3l {
  fill: currentColor;
  d: path("M4.75 20.5h14.5a.75.75 0 0 1 .102 1.493L19.25 22H4.75a.75.75 0 0 1-.102-1.493zh14.5zM16.25 3A3.75 3.75 0 0 1 20 6.75v8.5A3.75 3.75 0 0 1 16.25 19h-8.5A3.75 3.75 0 0 1 4 15.25v-8.5A3.75 3.75 0 0 1 7.75 3zm0 1.5h-8.5A2.25 2.25 0 0 0 5.5 6.75v8.5a2.25 2.25 0 0 0 2.25 2.25h8.5a2.25 2.25 0 0 0 2.25-2.25v-8.5a2.25 2.25 0 0 0-2.25-2.25");
}
</style><path class="f1lrjgb3l"/>`,
		"fallback": "fluent:app-title-24-regular",
	});
}

export default Component;
