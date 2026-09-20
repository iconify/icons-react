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
		"content": `<style>.gllufzigv {
  fill: currentColor;
  d: path("M11 6A5 5 0 1 1 1 6a5 5 0 0 1 10 0m-2.646.098a.5.5 0 0 0-.708 0L6.5 7.244V3.5a.5.5 0 0 0-1 0v3.744L4.354 6.098a.5.5 0 1 0-.708.707l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0 0-.707");
}
</style><path class="gllufzigv"/>`,
		"fallback": "fluent:arrow-circle-down-12-filled",
	});
}

export default Component;
