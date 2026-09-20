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
		"content": `<style>.gvqgx9x9j {
  fill: currentColor;
  d: path("M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m2.5 4.5a.5.5 0 0 0-.5.5v3.293L6.354 5.646l-.079-.064a.5.5 0 0 0-.693.693l.064.079L9.293 10H6a.5.5 0 0 0 0 1h4.5a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5");
}
</style><path class="gvqgx9x9j"/>`,
		"fallback": "fluent:arrow-circle-down-right-16-filled",
	});
}

export default Component;
