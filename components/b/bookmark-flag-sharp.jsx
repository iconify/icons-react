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
		"content": `<style>.a4my6-t8y {
  fill: currentColor;
  d: path("M9.5 14H11v-3h4.5L14 9l1.5-2h-6zM5 21V3h14v18l-7-3z");
}
</style><path class="a4my6-t8y"/>`,
		"fallback": "material-symbols:bookmark-flag-sharp",
	});
}

export default Component;
