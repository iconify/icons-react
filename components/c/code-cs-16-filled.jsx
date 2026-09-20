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
		"content": `<style>.cygi8ibxk {
  fill: currentColor;
  d: path("M3.5 5.25A1.25 1.25 0 0 0 2.25 6.5v3a1.25 1.25 0 1 0 2.5 0a.75.75 0 0 1 1.5 0a2.75 2.75 0 0 1-5.5 0v-3a2.75 2.75 0 1 1 5.5 0a.75.75 0 0 1-1.5 0A1.25 1.25 0 0 0 3.5 5.25m6-1a.75.75 0 0 1 .75.75v.75h1.5V5a.75.75 0 0 1 1.5 0v.75h1a.75.75 0 0 1 0 1.5h-1v1.5h1a.75.75 0 0 1 0 1.5h-1V11a.75.75 0 0 1-1.5 0v-.75h-1.5V11a.75.75 0 0 1-1.5 0v-.75H8a.75.75 0 0 1 0-1.5h.75v-1.5H8a.75.75 0 0 1 0-1.5h.75V5a.75.75 0 0 1 .75-.75m.75 3v1.5h1.5v-1.5z");
}
</style><path class="cygi8ibxk"/>`,
		"fallback": "fluent:code-cs-16-filled",
	});
}

export default Component;
