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
		"content": `<style>.tkp_1hbtw {
  fill: currentColor;
  d: path("M173.17 133.17L214.34 92H88a52 52 0 0 0 0 104h88a4 4 0 0 1 0 8H88a60 60 0 0 1 0-120h126.34l-41.17-41.17a4 4 0 0 1 5.66-5.66l48 48a4 4 0 0 1 0 5.66l-48 48a4 4 0 0 1-5.66-5.66");
}
</style><path class="tkp_1hbtw"/>`,
		"fallback": "ph:arrow-u-up-right-thin",
	});
}

export default Component;
