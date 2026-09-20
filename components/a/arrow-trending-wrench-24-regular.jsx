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
		"content": `<style>.a1438_b4u {
  fill: currentColor;
  d: path("M21 3.75a.75.75 0 0 0-.75-.75h-5a.75.75 0 0 0 0 1.5h3.19L13 9.94l-2.22-2.22a.75.75 0 0 0-1.06 0l-6.5 6.5a.75.75 0 1 0 1.06 1.06l5.97-5.97l2.22 2.22a.75.75 0 0 0 1.06 0l5.97-5.97v3.19a.75.75 0 0 0 1.5 0zm-.52 8.083c.25-.25.165-.673-.181-.749a4.001 4.001 0 0 0-4.54 5.47l-3.741 3.742a1.5 1.5 0 0 0 2.121 2.121l3.742-3.741a4.001 4.001 0 0 0 5.47-4.54c-.076-.347-.499-.432-.75-.182L20.858 15.7a1.5 1.5 0 0 1-2.122-2.121z");
}
</style><path class="a1438_b4u"/>`,
		"fallback": "fluent:arrow-trending-wrench-24-regular",
	});
}

export default Component;
