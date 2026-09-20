import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.e4iycnbxv {
  fill: currentColor;
  d: path("M3.22 24.78a.75.75 0 0 1 0-1.06L22.44 4.5h-9.69a.75.75 0 0 1 0-1.5h11.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-1.5 0V5.56L4.28 24.78a.75.75 0 0 1-1.06 0");
}
</style><path class="e4iycnbxv"/>`,
		"fallback": "fluent:arrow-up-right-28-regular",
	});
}

export default Component;
