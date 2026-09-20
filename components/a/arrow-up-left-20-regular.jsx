import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fb_zsdbra {
  fill: currentColor;
  d: path("M11.5 4a.5.5 0 0 0 0-1h-8a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 1 0V4.707l12.147 12.147a.5.5 0 0 0 .707-.708L4.707 4z");
}
</style><path class="fb_zsdbra"/>`,
		"fallback": "fluent:arrow-up-left-20-regular",
	});
}

export default Component;
