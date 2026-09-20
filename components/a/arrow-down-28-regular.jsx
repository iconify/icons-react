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
		"content": `<style>.msmzisuhd {
  fill: currentColor;
  d: path("M23.792 15.267a.75.75 0 1 0-1.082-1.04L14.752 22.5V3.748a.75.75 0 0 0-1.5 0V22.5l-7.959-8.273a.75.75 0 0 0-1.08 1.04l9.069 9.428a1 1 0 0 0 1.441 0z");
}
</style><path class="msmzisuhd"/>`,
		"fallback": "fluent:arrow-down-28-regular",
	});
}

export default Component;
