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
		"content": `<style>.dkqycepzl {
  fill: currentColor;
  d: path("m18 21l-1.4-1.4l1.575-1.6H14v-2h4.175L16.6 14.4L18 13l4 4zM7 10h8V8H7zm0 4h5v-2H7zm-4 7V6q0-.825.588-1.412T5 4h12q.825 0 1.413.588T19 6v5.075q-.25-.05-.5-.062T18 11q-2.525 0-4.262 1.75T12 17q0 .25.013.5t.062.5H6z");
}
</style><path class="dkqycepzl"/>`,
		"fallback": "material-symbols:chat-paste-go",
	});
}

export default Component;
