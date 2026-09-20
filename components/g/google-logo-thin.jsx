import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vzahjtbbx {
  fill: currentColor;
  d: path("M220 128a92 92 0 1 1-21-58.55a4 4 0 0 1-6.17 5.1A84 84 0 1 0 211.91 132H128a4 4 0 0 1 0-8h88a4 4 0 0 1 4 4");
}
</style><path class="vzahjtbbx"/>`,
		"fallback": "ph:google-logo-thin",
	});
}

export default Component;
