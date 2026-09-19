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
		"content": `<style>.aebgg6blv {
  fill: currentColor;
  d: path("M6.5 10H8v1.5H6.5zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9.5 14c0 .55-.45 1-1 1H5v-1.5h3v-1H6c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h2.5c.55 0 1 .45 1 1zm6.5 1h-1.75l-1.75-2.25V15H11V9h1.5v2.25L14.25 9H16l-2.25 3zm4-2.5h-1.5V14h-1v-1.5H16v-1h1.5V10h1v1.5H20z");
}
</style><path class="aebgg6blv"/>`,
		"fallback": "ic:baseline-9k-plus",
	});
}

export default Component;
