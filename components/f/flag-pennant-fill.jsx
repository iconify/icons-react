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
		"content": `<style>.xqa70t7kg {
  fill: currentColor;
  d: path("M248 104a8 8 0 0 1-5.37 7.56L64 173.69V216a8 8 0 0 1-16 0V40a8 8 0 0 1 10.63-7.56l184 64A8 8 0 0 1 248 104");
}
</style><path class="xqa70t7kg"/>`,
		"fallback": "ph:flag-pennant-fill",
	});
}

export default Component;
