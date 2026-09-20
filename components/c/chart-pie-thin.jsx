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
		"content": `<style>.o79_kmw4n {
  fill: currentColor;
  d: path("M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m77.58 50.59L132 121.07v-85a92.07 92.07 0 0 1 73.58 42.52M124 36.09v89.6l-77.58 44.79A92 92 0 0 1 124 36.09M128 220a92 92 0 0 1-77.58-42.59l159.16-91.89A92 92 0 0 1 128 220");
}
</style><path class="o79_kmw4n"/>`,
		"fallback": "ph:chart-pie-thin",
	});
}

export default Component;
