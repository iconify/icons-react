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
		"content": `<style>.azusqsqlx {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h8.5V5H5zm14 0V5h-4.5v14z");
}
</style><path class="azusqsqlx"/>`,
		"fallback": "material-symbols-light:grid-layout-side-outline-sharp",
	});
}

export default Component;
