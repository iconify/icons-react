import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pbk69dbhq {
  fill: currentColor;
  d: path("M8.354 6.098a.5.5 0 0 0-.708 0L6.5 7.244V3.5a.5.5 0 0 0-1 0v3.744L4.354 6.098a.5.5 0 1 0-.708.707l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0 0-.707M6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10m4-5a4 4 0 1 1-8 0a4 4 0 0 1 8 0");
}
</style><path class="pbk69dbhq"/>`,
		"fallback": "fluent:arrow-circle-down-12-regular",
	});
}

export default Component;
