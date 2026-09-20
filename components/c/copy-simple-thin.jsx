import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.k5-catbeg {
  fill: currentColor;
  d: path("M184 68H40a4 4 0 0 0-4 4v144a4 4 0 0 0 4 4h144a4 4 0 0 0 4-4V72a4 4 0 0 0-4-4m-4 144H44V76h136Zm40-172v144a4 4 0 0 1-8 0V44H72a4 4 0 0 1 0-8h144a4 4 0 0 1 4 4");
}
</style><path class="k5-catbeg"/>`,
		"fallback": "ph:copy-simple-thin",
	});
}

export default Component;
