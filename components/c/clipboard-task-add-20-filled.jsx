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
		"content": `<style>.zqlc3kbvr {
  fill: currentColor;
  d: path("M6.5 2a1.5 1.5 0 0 0-1.415 1H3.5A1.5 1.5 0 0 0 2 4.5v12A1.5 1.5 0 0 0 3.5 18h6.757A5.5 5.5 0 0 1 14 9.022V4.5A1.5 1.5 0 0 0 12.5 3h-1.585A1.5 1.5 0 0 0 9.5 2zM6 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m4.854 6.354l-3.5 3.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7 12.293l3.146-3.147a.5.5 0 0 1 .708.708M19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15z");
}
</style><path class="zqlc3kbvr"/>`,
		"fallback": "fluent:clipboard-task-add-20-filled",
	});
}

export default Component;
