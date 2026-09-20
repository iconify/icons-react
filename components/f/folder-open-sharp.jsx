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
		"content": `<style>.af8j7_b1l {
  fill: currentColor;
  d: path("M3 19V5h6.596l2 2h9.231v1H4v9.962l2.266-7.577h16.6L20.288 19z");
}
</style><path class="af8j7_b1l"/>`,
		"fallback": "material-symbols-light:folder-open-sharp",
	});
}

export default Component;
