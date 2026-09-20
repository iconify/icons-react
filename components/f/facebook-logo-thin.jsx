import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fn2jw8bag {
  fill: currentColor;
  d: path("M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m4 191.91V148h28a4 4 0 0 0 0-8h-28v-28a20 20 0 0 1 20-20h16a4 4 0 0 0 0-8h-16a28 28 0 0 0-28 28v28H96a4 4 0 0 0 0 8h28v71.91a92 92 0 1 1 8 0");
}
</style><path class="fn2jw8bag"/>`,
		"fallback": "ph:facebook-logo-thin",
	});
}

export default Component;
