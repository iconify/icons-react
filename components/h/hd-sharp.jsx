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
		"content": `<style>.hy142wh9r {
  fill: currentColor;
  d: path("M6.616 14.692H7.5v-2h2.616v2H11V9.308h-.885v2.5H7.5v-2.5h-.885zm6.384 0h3.789l.595-.615V9.904l-.596-.596H13zm.885-.884v-3.616H16.5v3.616zM3 19V5h18v14z");
}
</style><path class="hy142wh9r"/>`,
		"fallback": "material-symbols-light:hd-sharp",
	});
}

export default Component;
