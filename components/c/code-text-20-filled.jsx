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
		"content": `<style>.b5h51epyw {
  fill: currentColor;
  d: path("M2.75 4.5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zm3 3a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM4 11.25a.75.75 0 0 1 .75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75M2.75 13.5a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm9.75-5.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M10.75 4.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="b5h51epyw"/>`,
		"fallback": "fluent:code-text-20-filled",
	});
}

export default Component;
