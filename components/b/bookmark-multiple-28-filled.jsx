import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ff63g1btx {
  fill: currentColor;
  d: path("M8.401 3.5A3 3 0 0 1 11 2h6.75C20.65 2 23 4.35 23 7.25V20a3 3 0 0 1-1.5 2.599V7.25a3.75 3.75 0 0 0-3.75-3.75zM5 8a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v17.25a.75.75 0 0 1-1.166.624L12.5 21.651l-6.334 4.223A.75.75 0 0 1 5 25.25z");
}
</style><path class="ff63g1btx"/>`,
		"fallback": "fluent:bookmark-multiple-28-filled",
	});
}

export default Component;
