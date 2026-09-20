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
		"content": `<style>.nv_4cop9g {
  fill: currentColor;
  d: path("M213.66 194.34a8 8 0 0 1-11.32 11.32L184 187.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L172.69 176l-18.35-18.34a8 8 0 0 1 11.32-11.32L184 164.69l18.34-18.35a8 8 0 0 1 11.32 11.32L195.31 176ZM160 120a8 8 0 0 0 8-8V72a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8m40 0a8 8 0 0 0 8-8V32a8 8 0 0 0-16 0v80a8 8 0 0 0 8 8m-80-16a8 8 0 0 0-8 8v88a8 8 0 0 0 16 0v-88a8 8 0 0 0-8-8m-40 40a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8m-40 40a8 8 0 0 0-8 8v8a8 8 0 0 0 16 0v-8a8 8 0 0 0-8-8");
}
</style><path class="nv_4cop9g"/>`,
		"fallback": "ph:cell-signal-x",
	});
}

export default Component;
