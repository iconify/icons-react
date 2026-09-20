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
		"content": `<style>.j4xs4myzx {
  fill: currentColor;
  d: path("M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2m0 8a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m0-5.5a.5.5 0 0 1 .492.41L8.5 5v3.5a.5.5 0 0 1-.992.09L7.5 8.5V5a.5.5 0 0 1 .5-.5");
}
</style><path class="j4xs4myzx"/>`,
		"fallback": "fluent:error-circle-16-regular",
	});
}

export default Component;
