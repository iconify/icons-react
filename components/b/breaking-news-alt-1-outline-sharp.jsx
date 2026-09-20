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
		"content": `<style>.p0n_75b8i {
  fill: currentColor;
  d: path("M6.77 16.5h4.46v-1H6.77zm9.46 0h1v-1h-1zm-9.46-4h4.46v-1H6.77zm9.46 0h1v-5h-1zm-9.46-4h4.46v-1H6.77zM3 20V4h18v16zm1-1h16V5H4zm0 0V5z");
}
</style><path class="p0n_75b8i"/>`,
		"fallback": "material-symbols-light:breaking-news-alt-1-outline-sharp",
	});
}

export default Component;
