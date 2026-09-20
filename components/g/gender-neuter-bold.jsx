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
		"content": `<style>.zrbssrrvx {
  fill: currentColor;
  d: path("M212 104a84 84 0 1 0-96 83.13V232a12 12 0 0 0 24 0v-44.87A84.12 84.12 0 0 0 212 104m-84 60a60 60 0 1 1 60-60a60.07 60.07 0 0 1-60 60");
}
</style><path class="zrbssrrvx"/>`,
		"fallback": "ph:gender-neuter-bold",
	});
}

export default Component;
