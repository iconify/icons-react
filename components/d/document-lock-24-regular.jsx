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
		"content": `<style>.m6bvb5lnj {
  fill: currentColor;
  d: path("M18.5 20a.5.5 0 0 1-.5.5h-6v1q0 .257-.05.5H18a2 2 0 0 0 2-2V9.828a2 2 0 0 0-.586-1.414l-5.829-5.828A2.05 2.05 0 0 0 12.172 2H6a2 2 0 0 0-2 2v7.55a3.5 3.5 0 0 1 1.5-.905V4a.5.5 0 0 1 .5-.5h6V8a2 2 0 0 0 2 2h4.5zm-5-15.379L17.378 8.5H14a.5.5 0 0 1-.5-.5zM4 15h-.5A1.5 1.5 0 0 0 2 16.5v5A1.5 1.5 0 0 0 3.5 23h6a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 9.5 15H9v-1a2.5 2.5 0 0 0-5 0zm1.5-1a1 1 0 1 1 2 0v1h-2zm2 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0");
}
</style><path class="m6bvb5lnj"/>`,
		"fallback": "fluent:document-lock-24-regular",
	});
}

export default Component;
