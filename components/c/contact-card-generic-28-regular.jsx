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
		"content": `<style>.se30-fnlv {
  fill: currentColor;
  d: path("M23.251 4a2.75 2.75 0 0 1 2.75 2.75v14.5a2.75 2.75 0 0 1-2.75 2.75H4.754a2.75 2.75 0 0 1-2.75-2.75V6.75A2.75 2.75 0 0 1 4.754 4zM4.754 5.5c-.69 0-1.25.56-1.25 1.25v14.5c0 .69.56 1.25 1.25 1.25H23.25c.69 0 1.25-.56 1.25-1.25V6.75c0-.69-.56-1.25-1.25-1.25zM9.5 10a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 1.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M21.25 15a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5zm0-4a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5z");
}
</style><path class="se30-fnlv"/>`,
		"fallback": "fluent:contact-card-generic-28-regular",
	});
}

export default Component;
