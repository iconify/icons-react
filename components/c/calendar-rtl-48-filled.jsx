import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.aag0ipbdm {
  fill: currentColor;
  d: path("M42 12.25A6.25 6.25 0 0 0 35.75 6h-23.5A6.25 6.25 0 0 0 6 12.25V14h36zm0 4.25v19.25A6.25 6.25 0 0 1 35.75 42h-23.5A6.25 6.25 0 0 1 6 35.75V16.5zm-12 7a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0M24 26a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m-11-2.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0M32.5 34a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m-11-2.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0");
}
</style><path class="aag0ipbdm"/>`,
		"fallback": "fluent:calendar-rtl-48-filled",
	});
}

export default Component;
