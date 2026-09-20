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
		"content": `<style>.d2d6jzxqz {
  fill: currentColor;
  d: path("m18 21l-1.4-1.4l1.575-1.6H14v-2h4.175L16.6 14.4L18 13l4 4zM3 21V4h16v7.075q-.25-.05-.5-.062T18 11q-2.525 0-4.262 1.75T12 17q0 .25.013.5t.062.5H6z");
}
</style><path class="d2d6jzxqz"/>`,
		"fallback": "material-symbols:chat-paste-go-2-sharp",
	});
}

export default Component;
