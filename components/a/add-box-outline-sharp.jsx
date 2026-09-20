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
		"content": `<style>.l3yrx0tkp {
  fill: currentColor;
  d: path("M11.5 16.5h1v-4h4v-1h-4v-4h-1v4h-4v1h4zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="l3yrx0tkp"/>`,
		"fallback": "material-symbols-light:add-box-outline-sharp",
	});
}

export default Component;
