import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qhnwmiftk {
  fill: currentColor;
  d: path("M2.5 8a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M5.5 8a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0M8 4a4 4 0 1 0 0 8a4 4 0 0 0 0-8");
}
</style><path class="qhnwmiftk"/>`,
		"fallback": "fluent:circle-multiple-concentric-16-filled",
	});
}

export default Component;
