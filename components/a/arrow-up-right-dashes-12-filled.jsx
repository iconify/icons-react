import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qbu_rqk0k {
  fill: currentColor;
  d: path("M9.5 7.25a.75.75 0 0 0 1.5 0v-5.5a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0 0 1.5h3.69L6.97 3.97a.75.75 0 0 0 1.06 1.06L9.5 3.56zm-3.22-.47a.75.75 0 0 0-1.06-1.06L3.97 6.97a.75.75 0 0 0 1.06 1.06zm-3 3a.75.75 0 0 0-1.06-1.06L.97 9.97a.75.75 0 1 0 1.06 1.06z");
}
</style><path class="qbu_rqk0k"/>`,
		"fallback": "fluent:arrow-up-right-dashes-12-filled",
	});
}

export default Component;
