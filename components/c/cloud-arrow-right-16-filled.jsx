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
		"content": `<style>.ryg21obup {
  fill: currentColor;
  d: path("M8 2a4 4 0 0 0-3.97 3.507A3.25 3.25 0 0 0 4.25 12h.957a5.5 5.5 0 0 1 6.71-6.816A4 4 0 0 0 8 2m2.5 4a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9m2.353 4.854l-2 2a.5.5 0 0 1-.707-.708L11.293 11H8.5a.5.5 0 0 1 0-1h2.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 .146.351v.006a.5.5 0 0 1-.144.348z");
}
</style><path class="ryg21obup"/>`,
		"fallback": "fluent:cloud-arrow-right-16-filled",
	});
}

export default Component;
