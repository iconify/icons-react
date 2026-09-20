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
		"content": `<style>.b7sih0b-b {
  fill: currentColor;
  d: path("M7.5 16.5h6v-1h-6zm0-4h9v-1h-9zm0-4h9v-1h-9zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="b7sih0b-b"/>`,
		"fallback": "material-symbols-light:article-outline-sharp",
	});
}

export default Component;
