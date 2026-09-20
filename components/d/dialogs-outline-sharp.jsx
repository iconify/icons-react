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
		"content": `<style>.ql-uu-bod {
  fill: currentColor;
  d: path("M9 15h6V9H9zm-5 5V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="ql-uu-bod"/>`,
		"fallback": "material-symbols-light:dialogs-outline-sharp",
	});
}

export default Component;
