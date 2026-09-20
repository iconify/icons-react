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
		"content": `<style>.fyjfgnbuh {
  fill: currentColor;
  d: path("M11.35 2.1a3.75 3.75 0 0 1 5.303 0l9.25 9.25a3.75 3.75 0 0 1 0 5.304l-9.25 9.251a3.75 3.75 0 0 1-5.303 0l-9.252-9.25a3.75 3.75 0 0 1 0-5.305zm6.93 7.62a.75.75 0 0 0-1.06 0L14 12.94l-3.22-3.22a.75.75 0 1 0-1.06 1.061l3.22 3.22l-3.22 3.22a.75.75 0 0 0 1.06 1.06l3.22-3.22l3.22 3.22a.75.75 0 0 0 1.06-1.06L15.062 14l3.22-3.22a.75.75 0 0 0 0-1.06");
}
</style><path class="fyjfgnbuh"/>`,
		"fallback": "fluent:diamond-dismiss-28-filled",
	});
}

export default Component;
