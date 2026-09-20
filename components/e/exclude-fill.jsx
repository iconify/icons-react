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
		"content": `<style>.fv1z_2_5p {
  fill: currentColor;
  d: path("M240 160a80 80 0 0 1-158.64 14.64a80 80 0 0 0 93.28-93.28A80 80 0 0 1 240 160m-80-80a80.3 80.3 0 0 1 14.64 1.36a80 80 0 1 0-93.28 93.28A80 80 0 0 1 160 80");
}
</style><path class="fv1z_2_5p"/>`,
		"fallback": "ph:exclude-fill",
	});
}

export default Component;
