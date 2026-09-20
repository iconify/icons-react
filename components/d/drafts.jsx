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
		"content": `<style>.lu76-9r4y {
  fill: currentColor;
  d: path("m12 2.192l8.512 5.054q.219.16.353.394q.135.235.135.51v10.235q0 .69-.462 1.153T19.385 20H4.615q-.69 0-1.152-.462T3 18.384V8.15q0-.275.135-.51q.134-.234.354-.394zm0 10.458L19.8 8L12 3.35L4.2 8z");
}
</style><path class="lu76-9r4y"/>`,
		"fallback": "material-symbols-light:drafts",
	});
}

export default Component;
