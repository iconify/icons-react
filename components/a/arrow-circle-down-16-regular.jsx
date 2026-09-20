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
		"content": `<style>.df-3eh3ue {
  fill: currentColor;
  d: path("m5.146 8.854l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5a.5.5 0 0 0-.708-.708L8.5 9.793V5a.5.5 0 0 0-1 0v4.793L5.854 8.146a.5.5 0 1 0-.708.708M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8");
}
</style><path class="df-3eh3ue"/>`,
		"fallback": "fluent:arrow-circle-down-16-regular",
	});
}

export default Component;
