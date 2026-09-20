import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kz-ds7bjb {
  fill: currentColor;
  d: path("M8.5 6.5a2 2 0 0 0-2 2V11a2 2 0 0 0 2 2H11a2 2 0 0 0 2-2V8.5a2 2 0 0 0-2-2zm0 8.5a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2H11a2 2 0 0 0 2-2V17a2 2 0 0 0-2-2zM17 6.5a2 2 0 0 0-2 2V11a2 2 0 0 0 2 2h2.5a2 2 0 0 0 2-2V8.5a2 2 0 0 0-2-2zm0 8.5a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2h2.5a2 2 0 0 0 2-2V17a2 2 0 0 0-2-2zM3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v14.5A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25zM6.75 4.5A2.25 2.25 0 0 0 4.5 6.75v14.5a2.25 2.25 0 0 0 2.25 2.25h14.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25z");
}
</style><path class="kz-ds7bjb"/>`,
		"fallback": "fluent:app-folder-28-filled",
	});
}

export default Component;
