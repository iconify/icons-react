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
		"content": `<style>.q2zba6bsi {
  fill: currentColor;
  d: path("M2.75 2a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h2.5a.75.75 0 0 0 0-1.5H3.5V3.5h1.75a.75.75 0 0 0 0-1.5zm0 8.5a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h2.5a.75.75 0 0 0 0-1.5H3.5V12h1.75a.75.75 0 0 0 0-1.5zm5 1.5a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zM7 15.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75m0-11.5a.75.75 0 0 1 .75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5A.75.75 0 0 1 7 4.25m.75 2.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="q2zba6bsi"/>`,
		"fallback": "fluent:group-list-20-filled",
	});
}

export default Component;
