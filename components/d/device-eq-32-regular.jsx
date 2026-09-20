import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.w1lsa3cks {
  fill: currentColor;
  d: path("M16 2a1 1 0 0 1 1 1v26a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1m-6 5a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1m12 0a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1M4 12a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1m24 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1");
}
</style><path class="w1lsa3cks"/>`,
		"fallback": "fluent:device-eq-32-regular",
	});
}

export default Component;
