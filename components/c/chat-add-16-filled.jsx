import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.p41ydbcge {
  fill: currentColor;
  d: path("M8 1a7 7 0 1 1-3.538 13.04l-2.804.935a.5.5 0 0 1-.633-.633l.934-2.806A7 7 0 0 1 8 1m0 3.5a.5.5 0 0 0-.5.5v2.5H5a.5.5 0 0 0 0 1h2.5V11a.5.5 0 0 0 1 0V8.5H11a.5.5 0 1 0 0-1H8.5V5a.5.5 0 0 0-.5-.5");
}
</style><path class="p41ydbcge"/>`,
		"fallback": "fluent:chat-add-16-filled",
	});
}

export default Component;
