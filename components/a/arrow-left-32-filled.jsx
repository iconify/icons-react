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
		"content": `<style>.eweu4u53e {
  fill: currentColor;
  d: path("M29 16c0 .69-.56 1.25-1.25 1.25H7.213l7.432 7.628a1.25 1.25 0 1 1-1.79 1.744l-9.497-9.747a1.246 1.246 0 0 1 0-1.75l9.497-9.747a1.25 1.25 0 0 1 1.79 1.744L7.213 14.75H27.75c.69 0 1.25.56 1.25 1.25");
}
</style><path class="eweu4u53e"/>`,
		"fallback": "fluent:arrow-left-32-filled",
	});
}

export default Component;
