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
		"content": `<style>.zqu-09bqy {
  fill: currentColor;
  d: path("M192 20H64a28 28 0 0 0-28 28v160a28 28 0 0 0 28 28h128a28 28 0 0 0 28-28V48a28 28 0 0 0-28-28M60 84h136v88H60Zm4-40h128a4 4 0 0 1 4 4v12H60V48a4 4 0 0 1 4-4m128 168H64a4 4 0 0 1-4-4v-12h136v12a4 4 0 0 1-4 4");
}
</style><path class="zqu-09bqy"/>`,
		"fallback": "ph:device-tablet-bold",
	});
}

export default Component;
