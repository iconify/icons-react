import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fe_09vbye {
  fill: currentColor;
  d: path("M246 128a85.27 85.27 0 0 1-17.2 51.6a6 6 0 1 1-9.6-7.2A74 74 0 1 0 86 128a6 6 0 0 1-12 0a85.5 85.5 0 0 1 3.91-25.64A51 51 0 0 0 72 102a50 50 0 0 0 0 100h24a6 6 0 0 1 0 12H72A62 62 0 1 1 82.43 90.88A86 86 0 0 1 246 128m-66.24 43.76L158 193.51V128a6 6 0 0 0-12 0v65.51l-21.76-21.75a6 6 0 0 0-8.48 8.48l32 32a6 6 0 0 0 8.48 0l32-32a6 6 0 0 0-8.48-8.48");
}
</style><path class="fe_09vbye"/>`,
		"fallback": "ph:cloud-arrow-down-light",
	});
}

export default Component;
