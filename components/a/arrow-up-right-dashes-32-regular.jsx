import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.nc4fydjit {
  fill: currentColor;
  d: path("M15 3a1 1 0 1 0 0 2h10.586l-5.293 5.293a1 1 0 0 0 1.414 1.414L27 6.414V17a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1zm-3.793 19.207a1 1 0 0 0-1.414-1.414l-6.5 6.5a1 1 0 1 0 1.414 1.414zm8-9.414a1 1 0 0 1 0 1.414l-5.5 5.5a1 1 0 0 1-1.414-1.414l5.5-5.5a1 1 0 0 1 1.414 0");
}
</style><path class="nc4fydjit"/>`,
		"fallback": "fluent:arrow-up-right-dashes-32-regular",
	});
}

export default Component;
