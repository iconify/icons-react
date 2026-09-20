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
		"content": `<style>.gpurj_bmh {
  fill: currentColor;
  d: path("m138.83 130.83l-80 80a4 4 0 0 1-5.66-5.66L130.34 128L53.17 50.83a4 4 0 0 1 5.66-5.66l80 80a4 4 0 0 1 0 5.66m80-5.66l-80-80a4 4 0 0 0-5.66 5.66L210.34 128l-77.17 77.17a4 4 0 0 0 5.66 5.66l80-80a4 4 0 0 0 0-5.66");
}
</style><path class="gpurj_bmh"/>`,
		"fallback": "ph:caret-double-right-thin",
	});
}

export default Component;
