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
		"content": `<style>.ugdg0pbps {
  fill: currentColor;
  d: path("M14 1a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm0 3.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5M5.25 3H11v6a3 3 0 0 0 3 3h7c.35 0 .687-.06 1-.17v2.92A3.25 3.25 0 0 1 18.75 18H13l-5 3.75c-.824.618-2 .03-2-1V18h-.75A3.25 3.25 0 0 1 2 14.75v-8.5A3.25 3.25 0 0 1 5.25 3");
}
</style><path class="ugdg0pbps"/>`,
		"fallback": "fluent:comment-note-24-filled",
	});
}

export default Component;
