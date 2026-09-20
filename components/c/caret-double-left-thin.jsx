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
		"content": `<style>.maurqys_p {
  fill: currentColor;
  d: path("M202.83 205.17a4 4 0 0 1-5.66 5.66l-80-80a4 4 0 0 1 0-5.66l80-80a4 4 0 1 1 5.66 5.66L125.66 128ZM45.66 128l77.17-77.17a4 4 0 0 0-5.66-5.66l-80 80a4 4 0 0 0 0 5.66l80 80a4 4 0 1 0 5.66-5.66Z");
}
</style><path class="maurqys_p"/>`,
		"fallback": "ph:caret-double-left-thin",
	});
}

export default Component;
