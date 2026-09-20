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
		"content": `<style>.jqgr58obf {
  fill: currentColor;
  d: path("M8.5 11V8.5h7V11zm9.25 10A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21zm-10-14h8.5a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1-.75-.75v-4A.75.75 0 0 1 7.75 7");
}
</style><path class="jqgr58obf"/>`,
		"fallback": "fluent:calendar-work-week-24-filled",
	});
}

export default Component;
