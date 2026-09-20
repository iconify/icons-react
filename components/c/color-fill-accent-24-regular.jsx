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
		"content": `<style>.rysd-czrp {
  fill: currentColor;
  d: path("M13.052 15c.273 1.61 1.58 3 3.448 3c1.842 0 3.14-1.354 3.436-2.936A1.5 1.5 0 0 1 21 16.5v3a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-3A1.5 1.5 0 0 1 4.5 15h3.09a3 3 0 0 0 4.048 0z");
}
</style><path class="rysd-czrp"/>`,
		"fallback": "fluent:color-fill-accent-24-regular",
	});
}

export default Component;
