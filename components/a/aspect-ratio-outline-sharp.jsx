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
		"content": `<style>.af_c2fe0k {
  fill: currentColor;
  d: path("M14.5 16.5h4v-4h-1v3h-3zm-9-5h1v-3h3v-1h-4zM3 19V5h18v14zm1-1h16V6H4zm0 0V6z");
}
</style><path class="af_c2fe0k"/>`,
		"fallback": "material-symbols-light:aspect-ratio-outline-sharp",
	});
}

export default Component;
