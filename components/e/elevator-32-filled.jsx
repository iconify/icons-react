import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ncp-xf45v {
  fill: currentColor;
  d: path("M17 28h8.5a4.5 4.5 0 0 0 4.5-4.5v-15A4.5 4.5 0 0 0 25.5 4H17zm7.5-16v6.086l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414l1.293 1.293V12a1 1 0 1 1 2 0M15 4H6.5A4.5 4.5 0 0 0 2 8.5v15A4.5 4.5 0 0 0 6.5 28H15zM8.5 21.5a1 1 0 0 1-1-1v-6.086l-1.293 1.293a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L9.5 14.414V20.5a1 1 0 0 1-1 1");
}
</style><path class="ncp-xf45v"/>`,
		"fallback": "fluent:elevator-32-filled",
	});
}

export default Component;
