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
		"content": `<style>.h1juncb5m {
  fill: currentColor;
  d: path("M6.5 8.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75h-.5v2.69l1.56 1.56h2.69v-.5a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1-.75-.75v-.5h-2.69l-1.78 1.78a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 0-1.06l1.78-1.78V11.5h-.5a.75.75 0 0 1-.75-.75zm12.914.164l-5.829-5.828A2.1 2.1 0 0 0 12.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9.828a2 2 0 0 0-.586-1.414M18.5 20a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5h6V8a2 2 0 0 0 2 2h4.5zm-5-15.379L17.378 8.5H14a.5.5 0 0 1-.5-.5z");
}
</style><path class="h1juncb5m"/>`,
		"fallback": "fluent:document-flowchart-24-regular",
	});
}

export default Component;
