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
		"content": `<style>.v0931em8p {
  fill: currentColor;
  d: path("M10.5 16.5h8v-5.692h-8zM3 19V5h18v14zm1-1h16V6H4zm0 0V6z");
}
</style><path class="v0931em8p"/>`,
		"fallback": "material-symbols-light:branding-watermark-outline-sharp",
	});
}

export default Component;
