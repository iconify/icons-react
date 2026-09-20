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
		"content": `<style>.yg05dsbxz {
  fill: currentColor;
  d: path("M8.5 3a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0V3.707l10.147 10.147a.5.5 0 0 0 .707-.708L3.707 3z");
}
</style><path class="yg05dsbxz"/>`,
		"fallback": "fluent:arrow-up-left-16-regular",
	});
}

export default Component;
