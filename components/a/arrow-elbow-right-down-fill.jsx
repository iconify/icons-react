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
		"content": `<style>.vyh1_ro9k {
  fill: currentColor;
  d: path("m229.66 165.66l-48 48a8 8 0 0 1-11.32 0l-48-48A8 8 0 0 1 128 152h40V72H32a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8v88h40a8 8 0 0 1 5.66 13.66");
}
</style><path class="vyh1_ro9k"/>`,
		"fallback": "ph:arrow-elbow-right-down-fill",
	});
}

export default Component;
