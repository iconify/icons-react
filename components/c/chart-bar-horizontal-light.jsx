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
		"content": `<style>.rpf3sf70z {
  fill: currentColor;
  d: path("M224 98h-42V56a6 6 0 0 0-6-6H54V40a6 6 0 0 0-12 0v176a6 6 0 0 0 12 0v-10h90a6 6 0 0 0 6-6v-42h74a6 6 0 0 0 6-6v-48a6 6 0 0 0-6-6m-54-36v36H54V62Zm-32 132H54v-36h84Zm80-48H54v-36h164Z");
}
</style><path class="rpf3sf70z"/>`,
		"fallback": "ph:chart-bar-horizontal-light",
	});
}

export default Component;
