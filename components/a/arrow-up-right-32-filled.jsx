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
		"content": `<style>.kezy3sbui {
  fill: currentColor;
  d: path("M15.25 3a1.25 1.25 0 1 0 0 2.5h9.482L3.366 26.866a1.25 1.25 0 0 0 1.768 1.768L26.5 7.268v9.482a1.25 1.25 0 1 0 2.5 0V4.25C29 3.56 28.44 3 27.75 3z");
}
</style><path class="kezy3sbui"/>`,
		"fallback": "fluent:arrow-up-right-32-filled",
	});
}

export default Component;
