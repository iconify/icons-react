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
		"content": `<style>.d3efx2bmp {
  fill: currentColor;
  d: path("M210.83 133.17a4 4 0 0 1 0 5.66l-80 80a4 4 0 0 1-5.66 0l-80-80a4 4 0 0 1 5.66-5.66L128 210.34l77.17-77.17a4 4 0 0 1 5.66 0m-85.66 5.66a4 4 0 0 0 5.66 0l80-80a4 4 0 1 0-5.66-5.66L128 130.34L50.83 53.17a4 4 0 0 0-5.66 5.66Z");
}
</style><path class="d3efx2bmp"/>`,
		"fallback": "ph:caret-double-down-thin",
	});
}

export default Component;
