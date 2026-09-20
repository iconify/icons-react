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
		"content": `<style>.dgc05pior {
  fill: currentColor;
  d: path("M5 19h14V5H5zm-1 1V4h16v16zm4.4-3.712l3.6-3.6l3.6 3.6l.688-.688l-3.6-3.6l3.6-3.6l-.688-.689l-3.6 3.6l-3.6-3.6l-.689.689l3.6 3.6l-3.6 3.6zM5 19V5z");
}
</style><path class="dgc05pior"/>`,
		"fallback": "material-symbols-light:disabled-by-default-outline-sharp",
	});
}

export default Component;
