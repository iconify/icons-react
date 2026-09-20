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
		"content": `<style>.p0km72bpc {
  fill: currentColor;
  d: path("M1.22 10.78a.75.75 0 0 1 0-1.06L8.44 2.5H4.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V3.56l-7.22 7.22a.75.75 0 0 1-1.06 0");
}
</style><path class="p0km72bpc"/>`,
		"fallback": "fluent:arrow-up-right-12-filled",
	});
}

export default Component;
