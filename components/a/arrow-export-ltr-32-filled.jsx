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
		"content": `<style>.rqlylgb9t {
  fill: currentColor;
  d: path("M3.25 4.5c.69 0 1.25.56 1.25 1.25v20a1.25 1.25 0 1 1-2.5 0v-20c0-.69.56-1.25 1.25-1.25m17.116 2.866a1.25 1.25 0 0 1 1.768 0l7.5 7.5a1.25 1.25 0 0 1 0 1.768l-7.5 7.5a1.25 1.25 0 0 1-1.768-1.768L25.732 17H8.25a1.25 1.25 0 1 1 0-2.5h17.482l-5.366-5.366a1.25 1.25 0 0 1 0-1.768");
}
</style><path class="rqlylgb9t"/>`,
		"fallback": "fluent:arrow-export-ltr-32-filled",
	});
}

export default Component;
