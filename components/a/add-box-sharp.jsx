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
		"content": `<style>.hq5j8dbkl {
  fill: currentColor;
  d: path("M11.5 16.5h1v-4h4v-1h-4v-4h-1v4h-4v1h4zM4 20V4h16v16z");
}
</style><path class="hq5j8dbkl"/>`,
		"fallback": "material-symbols-light:add-box-sharp",
	});
}

export default Component;
