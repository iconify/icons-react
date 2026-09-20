import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.s-5jqdbmf {
  fill: currentColor;
  d: path("M18 10a8 8 0 1 0-16 0a8 8 0 0 0 16 0M9.508 8.91a.5.5 0 0 1 .984 0L10.5 9v4.502l-.008.09a.5.5 0 0 1-.984 0l-.008-.09V9zM9.25 6.75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0");
}
</style><path class="s-5jqdbmf"/>`,
		"fallback": "fluent:info-20-filled",
	});
}

export default Component;
