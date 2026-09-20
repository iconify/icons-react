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
		"content": `<style>.gr-d04i3s {
  fill: currentColor;
  d: path("M5 22V3h16l-2 5l2 5H7v9z");
}
</style><path class="gr-d04i3s"/>`,
		"fallback": "material-symbols:flag-2",
	});
}

export default Component;
