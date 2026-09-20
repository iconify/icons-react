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
		"content": `<style>.fgsacdbpa {
  fill: currentColor;
  d: path("M176 12H80a28 28 0 0 0-28 28v176a28 28 0 0 0 28 28h96a28 28 0 0 0 28-28V40a28 28 0 0 0-28-28M76 76h104v104H76Zm4-40h96a4 4 0 0 1 4 4v12H76V40a4 4 0 0 1 4-4m96 184H80a4 4 0 0 1-4-4v-12h104v12a4 4 0 0 1-4 4");
}
</style><path class="fgsacdbpa"/>`,
		"fallback": "ph:device-mobile-bold",
	});
}

export default Component;
