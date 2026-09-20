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
		"content": `<style>.fq6qx9bpn {
  fill: currentColor;
  d: path("M184 76h-60V32a4 4 0 0 0-6.83-2.83l-96 96a4 4 0 0 0 0 5.66l96 96A4 4 0 0 0 124 224v-44h60a4 4 0 0 0 4-4V80a4 4 0 0 0-4-4m-4 96h-60a4 4 0 0 0-4 4v38.34L29.66 128L116 41.66V80a4 4 0 0 0 4 4h60Zm40-92v96a4 4 0 0 1-8 0V80a4 4 0 0 1 8 0");
}
</style><path class="fq6qx9bpn"/>`,
		"fallback": "ph:arrow-fat-line-left-thin",
	});
}

export default Component;
