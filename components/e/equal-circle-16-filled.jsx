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
		"content": `<style>.ptg532byr {
  fill: currentColor;
  d: path("M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M4.5 6.5A.5.5 0 0 0 5 7h6a.5.5 0 0 0 0-1H5a.5.5 0 0 0-.5.5M5 9a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1z");
}
</style><path class="ptg532byr"/>`,
		"fallback": "fluent:equal-circle-16-filled",
	});
}

export default Component;
