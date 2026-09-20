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
		"content": `<style>.m5vi-zqvb {
  fill: currentColor;
  d: path("M3.5 19.962v-1h17v1zm0-14.923v-1h17v1zm0 4V7.5h1.539v1.539zm15.462 0V7.5H20.5v1.539zM3.5 16.5v-1.538h1.539V16.5zm15.462 0v-1.538H20.5V16.5zM8.5 16.5v-4h-5v-1h5v-4h7v4h5v1h-5v4z");
}
</style><path class="m5vi-zqvb"/>`,
		"fallback": "material-symbols-light:identity-aware-proxy",
	});
}

export default Component;
