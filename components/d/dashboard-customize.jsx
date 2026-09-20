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
		"content": `<style>.nl5-izb-l {
  fill: currentColor;
  d: path("M3.5 3.5h7v7h-7zm10 0h7v7h-7zm-10 10h7v7h-7zm13 0h1v3h3v1h-3v3h-1v-3h-3v-1h3z");
}
</style><path class="nl5-izb-l"/>`,
		"fallback": "material-symbols-light:dashboard-customize",
	});
}

export default Component;
