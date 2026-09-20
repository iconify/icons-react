import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rl-d6_bjb {
  fill: currentColor;
  d: path("M4 12.25A6.25 6.25 0 0 1 10.25 6h6.465a3.75 3.75 0 0 1 2.651 1.098l3.384 3.384l-5.152 5.152a1.25 1.25 0 0 1-.883.366H4zm0 6.25v16.25A6.25 6.25 0 0 0 10.25 41h27.5A6.25 6.25 0 0 0 44 34.75v-17.5A6.25 6.25 0 0 0 37.75 11H25.768l-6.402 6.402a3.75 3.75 0 0 1-2.651 1.098z");
}
</style><path class="rl-d6_bjb"/>`,
		"fallback": "fluent:folder-48-filled",
	});
}

export default Component;
