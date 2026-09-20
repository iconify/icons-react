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
		"content": `<style>.uazgjac8v {
  fill: currentColor;
  d: path("M5 21V3h14v18l-7-3z");
}
</style><path class="uazgjac8v"/>`,
		"fallback": "material-symbols:bookmark-sharp",
	});
}

export default Component;
