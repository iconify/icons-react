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
		"content": `<style>.zc3q5nphy {
  fill: currentColor;
  d: path("M19 19V5h1v14zm-7-2.692l-.708-.708l3.1-3.1H4v-1h10.392l-3.1-3.1l.708-.708L16.308 12z");
}
</style><path class="zc3q5nphy"/>`,
		"fallback": "material-symbols-light:horizontal-align-right",
	});
}

export default Component;
