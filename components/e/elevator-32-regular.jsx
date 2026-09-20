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
		"content": `<style>.u2gzg4k8t {
  fill: currentColor;
  d: path("M9.5 21.5a1 1 0 0 0 1-1v-6.086l1.293 1.293a1 1 0 0 0 1.414-1.414l-3-3a1 1 0 0 0-1.414 0l-3 3a1 1 0 1 0 1.414 1.414L8.5 14.414V20.5a1 1 0 0 0 1 1m14-9.5a1 1 0 1 0-2 0v6.086l-1.293-1.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L23.5 18.086zm-17-8A4.5 4.5 0 0 0 2 8.5v15A4.5 4.5 0 0 0 6.5 28h19a4.5 4.5 0 0 0 4.5-4.5v-15A4.5 4.5 0 0 0 25.5 4zM4 8.5A2.5 2.5 0 0 1 6.5 6H15v20H6.5A2.5 2.5 0 0 1 4 23.5zM17 26V6h8.5A2.5 2.5 0 0 1 28 8.5v15a2.5 2.5 0 0 1-2.5 2.5z");
}
</style><path class="u2gzg4k8t"/>`,
		"fallback": "fluent:elevator-32-regular",
	});
}

export default Component;
