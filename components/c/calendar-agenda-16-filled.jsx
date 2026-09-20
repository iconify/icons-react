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
		"content": `<style>.i92fxpbnx {
  fill: currentColor;
  d: path("M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zm-6 8a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0-2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0-2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z");
}
</style><path class="i92fxpbnx"/>`,
		"fallback": "fluent:calendar-agenda-16-filled",
	});
}

export default Component;
