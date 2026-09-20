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
		"content": `<style>.jxxt5f8lv {
  fill: currentColor;
  d: path("M180 100.23V88a28 28 0 0 0-28-28h-20V28h36a12 12 0 0 1 12 12a4 4 0 0 0 8 0a20 20 0 0 0-20-20h-64a4 4 0 0 0 0 8h20v32h-20a28 28 0 0 0-28 28v12.23A36 36 0 0 0 44 136v80a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12v-80a36 36 0 0 0-32-35.77M104 68h48a20 20 0 0 1 20 20v12H84V88a20 20 0 0 1 20-20m100 148a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4v-80a28 28 0 0 1 28-28h96a28 28 0 0 1 28 28Z");
}
</style><path class="jxxt5f8lv"/>`,
		"fallback": "ph:hand-soap-thin",
	});
}

export default Component;
