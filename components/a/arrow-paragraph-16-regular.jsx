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
		"content": `<style>.mwlr99b3w {
  fill: currentColor;
  d: path("M13.5 2a.5.5 0 0 0-.5.5V5a1 1 0 0 1-1 1H8.707l1.147-1.146a.5.5 0 0 0-.708-.708l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 1 0 .708-.708L8.707 7H12a2 2 0 0 0 2-2V2.5a.5.5 0 0 0-.5-.5M5.646 8.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L6.793 11H1.5a.5.5 0 0 1 0-1h5.293L5.646 8.854a.5.5 0 0 1 0-.708");
}
</style><path class="mwlr99b3w"/>`,
		"fallback": "fluent:arrow-paragraph-16-regular",
	});
}

export default Component;
