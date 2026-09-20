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
		"content": `<style>.e10ej6bdw {
  fill: currentColor;
  d: path("M6.5 12a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11M20 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7.498c.198-.474.341-.977.422-1.5H20a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5H7.5v5.576A6.5 6.5 0 0 0 6 11.02V5.5H4a.5.5 0 0 0-.5.5v5.732A6.5 6.5 0 0 0 2 12.81V6a2 2 0 0 1 2-2zM3.495 17a.5.5 0 0 0 0 1h6.002a.5.5 0 0 0 0-1zM16 7a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm-4 1.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-.5-.5z");
}
</style><path class="e10ej6bdw"/>`,
		"fallback": "fluent:album-subtract-24-regular",
	});
}

export default Component;
