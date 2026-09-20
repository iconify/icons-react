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
		"content": `<style>.nkw2qhbmg {
  fill: currentColor;
  d: path("M3 18.135V5.884h8.5V4h1v1.885H21v12.25h-8.5V20h-1v-1.866zm1-1h7.5v-2.75H4zm0-7.5h7.5v-2.75H4zm0 3.75h10.327v-2.75H4zm8.5 3.75H20V6.884h-7.5v2.75h2.827v4.75H12.5zM4 13.385v-2.75z");
}
</style><path class="nkw2qhbmg"/>`,
		"fallback": "material-symbols-light:bullet-chart-outline",
	});
}

export default Component;
