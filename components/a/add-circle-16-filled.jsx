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
		"content": `<style>.lf9k6ccyi {
  fill: currentColor;
  d: path("M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m7.5-3a.5.5 0 0 0-1 0v2.5H5a.5.5 0 0 0 0 1h2.5V11a.5.5 0 0 0 1 0V8.5H11a.5.5 0 0 0 0-1H8.5z");
}
</style><path class="lf9k6ccyi"/>`,
		"fallback": "fluent:add-circle-16-filled",
	});
}

export default Component;
