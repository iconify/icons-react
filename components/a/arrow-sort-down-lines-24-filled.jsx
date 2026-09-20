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
		"content": `<style>.d_3vxnavl {
  fill: currentColor;
  d: path("M18 3a1 1 0 1 0-2 0v15.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0l3.5-3.5a1 1 0 0 0-1.414-1.414L18 18.586zM3 4a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2zm3 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m5 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z");
}
</style><path class="d_3vxnavl"/>`,
		"fallback": "fluent:arrow-sort-down-lines-24-filled",
	});
}

export default Component;
