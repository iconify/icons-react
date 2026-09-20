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
		"content": `<style>.c8icjmfwe {
  fill: currentColor;
  d: path("M10 4a6 6 0 1 1-5.996 5.777a.75.75 0 1 0-1.499-.054A7.5 7.5 0 1 0 5 4.41V3.25a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75h3a.75.75 0 0 0 0-1.5H6.031A5.98 5.98 0 0 1 10 4m.5 2.25a.75.75 0 0 0-1.5 0v4c0 .414.336.75.75.75h3a.75.75 0 0 0 0-1.5H10.5z");
}
</style><path class="c8icjmfwe"/>`,
		"fallback": "fluent:history-20-filled",
	});
}

export default Component;
