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
		"content": `<style>.wnnbb8hlj {
  fill: currentColor;
  d: path("M4 21V9l8-6l8 6v12h-6v-7h-4v7z");
}
</style><path class="wnnbb8hlj"/>`,
		"fallback": "material-symbols:home",
	});
}

export default Component;
