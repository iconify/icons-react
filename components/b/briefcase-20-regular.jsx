import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d_z4wc6ob {
  fill: currentColor;
  d: path("M11.25 2c.966 0 1.75.784 1.75 1.75V5h2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-2.996-2.846L2 14V8a3 3 0 0 1 3-3h2V3.75C7 2.784 7.784 2 8.75 2zM17 11.231A3 3 0 0 1 15 12h-4v.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V12H5a2.98 2.98 0 0 1-2-.769V14l.01.204A2 2 0 0 0 5 16h10a2 2 0 0 0 2-2zM5 6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h4v-.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v.5h4a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm3.75-3a.75.75 0 0 0-.75.75V5h4V3.75a.75.75 0 0 0-.75-.75z");
}
</style><path class="d_z4wc6ob"/>`,
		"fallback": "fluent:briefcase-20-regular",
	});
}

export default Component;
