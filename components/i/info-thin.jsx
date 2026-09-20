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
		"content": `<style>.lhbq6nbzx {
  fill: currentColor;
  d: path("M140 176a4 4 0 0 1-4 4a12 12 0 0 1-12-12v-40a4 4 0 0 0-4-4a4 4 0 0 1 0-8a12 12 0 0 1 12 12v40a4 4 0 0 0 4 4a4 4 0 0 1 4 4m-16-84a8 8 0 1 0-8-8a8 8 0 0 0 8 8m104 36A100 100 0 1 1 128 28a100.11 100.11 0 0 1 100 100m-8 0a92 92 0 1 0-92 92a92.1 92.1 0 0 0 92-92");
}
</style><path class="lhbq6nbzx"/>`,
		"fallback": "ph:info-thin",
	});
}

export default Component;
