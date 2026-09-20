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
		"content": `<style>.zd9nb5x2o {
  fill: currentColor;
  d: path("M18 14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-3.356A4 4 0 0 0 5 12h4v.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V12h4a4 4 0 0 0 3-1.356zM11.25 2c.966 0 1.75.784 1.75 1.75V5h2a3 3 0 1 1 0 6h-4v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.5H5a3 3 0 0 1 0-6h2V3.75C7 2.784 7.784 2 8.75 2zm-2.5 1a.75.75 0 0 0-.75.75V5h4V3.75a.75.75 0 0 0-.75-.75z");
}
</style><path class="zd9nb5x2o"/>`,
		"fallback": "fluent:briefcase-20-filled",
	});
}

export default Component;
