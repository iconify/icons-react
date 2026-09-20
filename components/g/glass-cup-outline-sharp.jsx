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
		"content": `<style>.tk3a7u4mj {
  fill: currentColor;
  d: path("M5.2 22L3 2h18l-2.2 20zm1.575-4L7 20h10l.225-2zm-.2-2H17.45l1.3-12H5.25zm.2 4h10.45z");
}
</style><path class="tk3a7u4mj"/>`,
		"fallback": "material-symbols:glass-cup-outline-sharp",
	});
}

export default Component;
