import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.r1ek65b0j {
  fill: currentColor;
  d: path("M14 2a1 1 0 0 1 1 1v22a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M9 6a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1m10 0a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1M4 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1m20 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1");
}
</style><path class="r1ek65b0j"/>`,
		"fallback": "fluent:device-eq-28-filled",
	});
}

export default Component;
