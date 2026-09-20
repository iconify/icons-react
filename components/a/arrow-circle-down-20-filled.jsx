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
		"content": `<style>.u9fi13bmy {
  fill: currentColor;
  d: path("M18 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-4.646.854a.5.5 0 0 0-.708-.708L10.5 12.293V6.5a.5.5 0 0 0-1 0v5.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3a.5.5 0 0 0 .708 0z");
}
</style><path class="u9fi13bmy"/>`,
		"fallback": "fluent:arrow-circle-down-20-filled",
	});
}

export default Component;
