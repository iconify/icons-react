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
		"content": `<style>.bza2j4l5v {
  fill: currentColor;
  d: path("M196 32v144a4 4 0 0 1-4 4H57.66l41.17 41.17a4 4 0 0 1-5.66 5.66l-48-48a4 4 0 0 1 0-5.66l48-48a4 4 0 1 1 5.66 5.66L57.66 172H188V32a4 4 0 0 1 8 0");
}
</style><path class="bza2j4l5v"/>`,
		"fallback": "ph:arrow-elbow-down-left-thin",
	});
}

export default Component;
