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
		"content": `<style>.i3knrprta {
  fill: currentColor;
  d: path("M6.5 12.5h8v-1h-8zm0-3h8v-1h-8zM3 19V5h18v14zm1-1h16V6H4zm0 0V6z");
}
</style><path class="i3knrprta"/>`,
		"fallback": "material-symbols-light:featured-play-list-outline-sharp",
	});
}

export default Component;
