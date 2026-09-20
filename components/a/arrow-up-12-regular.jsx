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
		"content": `<style>.uq35ogpnu {
  fill: currentColor;
  d: path("M6 10.5a.5.5 0 0 0 .5-.5V3.207l2.646 2.647a.5.5 0 1 0 .708-.708l-3.5-3.5a.5.5 0 0 0-.708 0l-3.5 3.5a.5.5 0 1 0 .708.708L5.5 3.207V10a.5.5 0 0 0 .5.5");
}
</style><path class="uq35ogpnu"/>`,
		"fallback": "fluent:arrow-up-12-regular",
	});
}

export default Component;
