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
		"content": `<style>.hsir1575c {
  fill: currentColor;
  d: path("M2 6.25A3.25 3.25 0 0 1 5.25 3h13.5A3.25 3.25 0 0 1 22 6.25v8.5A3.25 3.25 0 0 1 18.75 18H13l-5 3.75c-.824.618-2 .03-2-1V18h-.75A3.25 3.25 0 0 1 2 14.75zM11.25 12h7a.75.75 0 0 0 0-1.5h-7a.75.75 0 0 0 0 1.5m-3-1.5h-2.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5m-2.5 3a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zm10 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 0 0 1.5");
}
</style><path class="hsir1575c"/>`,
		"fallback": "fluent:comment-text-24-filled",
	});
}

export default Component;
