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
		"content": `<style>.ax_gvxbma {
  fill: currentColor;
  d: path("M198 80v144a6 6 0 0 1-12 0V86H62.49l37.75 37.76a6 6 0 1 1-8.48 8.48l-48-48a6 6 0 0 1 0-8.48l48-48a6 6 0 1 1 8.48 8.48L62.49 74H192a6 6 0 0 1 6 6");
}
</style><path class="ax_gvxbma"/>`,
		"fallback": "ph:arrow-elbow-up-left-light",
	});
}

export default Component;
