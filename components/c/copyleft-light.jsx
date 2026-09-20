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
		"content": `<style>.vm_satbtz {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m46-90a46 46 0 0 1-82.8 27.61a6 6 0 0 1 9.6-7.21a34 34 0 1 0 0-40.8a6 6 0 0 1-9.6-7.21A46 46 0 0 1 174 128");
}
</style><path class="vm_satbtz"/>`,
		"fallback": "ph:copyleft-light",
	});
}

export default Component;
