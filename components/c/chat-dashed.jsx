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
		"content": `<style>.fqoqnkbic {
  fill: currentColor;
  d: path("M2 12V8h2v4zm0 10v-8h2v3.125L5.15 16H8v2H6zm8-4v-2h4v2zm6 0v-2h4v-2h2v2q0 .825-.587 1.413T20 18zm4-6V8h2v4zm0-5.975V4h-4V2h4q.825 0 1.413.588T22 4v2.025zM10 4V2h4v2zM2 6.025V4q0-.825.588-1.412T4 2h4v2H4v2.025z");
}
</style><path class="fqoqnkbic"/>`,
		"fallback": "material-symbols:chat-dashed",
	});
}

export default Component;
