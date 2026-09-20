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
		"content": `<style>.d1ay-abod {
  fill: currentColor;
  d: path("M5.75 3.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m2.34 2.652A4.001 4.001 0 1 1 14.646 10a4 4 0 1 1-6.556 3.85a4 4 0 1 1 0-7.699M5.75 18a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M19 10a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0");
}
</style><path class="d1ay-abod"/>`,
		"fallback": "fluent:dust-20-filled",
	});
}

export default Component;
