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
		"content": `<style>.nz9g9ubfk {
  fill: currentColor;
  d: path("M5 22V3h16l-2 5l2 5H7v9zm2-11h11.05l-1.2-3l1.2-3H7zm0 0V5z");
}
</style><path class="nz9g9ubfk"/>`,
		"fallback": "material-symbols:flag-2-outline-sharp",
	});
}

export default Component;
