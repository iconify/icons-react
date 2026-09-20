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
		"content": `<style>.za9lbrb1f {
  fill: currentColor;
  d: path("M2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0m4-3.5v2a.5.5 0 0 0 .5.5H7v1.793l-1.354 1.353a.5.5 0 0 0 0 .708l1.5 1.5a.5.5 0 0 0 .708 0L9.207 13H11v.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v.5H9.207L8 10.793V9h.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5");
}
</style><path class="za9lbrb1f"/>`,
		"fallback": "fluent:flowchart-circle-20-filled",
	});
}

export default Component;
