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
		"content": `<style>.jiwyozbcv {
  fill: currentColor;
  d: path("M200.12 55.88A102 102 0 1 0 55.88 200.13A102 102 0 1 0 200.12 55.88M90 209.62a89.6 89.6 0 0 1-21.23-13.89L90 174.49Zm32 8.16a90 90 0 0 1-20-3.58v-51.71l20-20Zm32-3.58a89.8 89.8 0 0 1-20 3.58v-87.29l20-20Zm32-17.4a89.5 89.5 0 0 1-20 12.83V98.49l20-20Zm-125.73-9.56a90 90 0 0 1 127-127ZM198 184.57V71.43a90 90 0 0 1 0 113.14");
}
</style><path class="jiwyozbcv"/>`,
		"fallback": "ph:circle-half-tilt-light",
	});
}

export default Component;
