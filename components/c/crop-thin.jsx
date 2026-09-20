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
		"content": `<style>.zgatkt5-v {
  fill: currentColor;
  d: path("M236 192a4 4 0 0 1-4 4h-36v36a4 4 0 0 1-8 0v-36H64a4 4 0 0 1-4-4V68H24a4 4 0 0 1 0-8h36V24a4 4 0 0 1 8 0v164h164a4 4 0 0 1 4 4M96 68h92v92a4 4 0 0 0 8 0V64a4 4 0 0 0-4-4H96a4 4 0 0 0 0 8");
}
</style><path class="zgatkt5-v"/>`,
		"fallback": "ph:crop-thin",
	});
}

export default Component;
