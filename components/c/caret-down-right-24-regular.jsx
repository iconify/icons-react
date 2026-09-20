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
		"content": `<style>.byw4e3b6b {
  fill: currentColor;
  d: path("m16.5 7.811l-8.689 8.69h8.44a.25.25 0 0 0 .25-.25zm-.633-1.487c.787-.788 2.133-.23 2.133.884v9.042A1.75 1.75 0 0 1 16.25 18H7.208c-1.114 0-1.672-1.346-.884-2.133z");
}
</style><path class="byw4e3b6b"/>`,
		"fallback": "fluent:caret-down-right-24-regular",
	});
}

export default Component;
