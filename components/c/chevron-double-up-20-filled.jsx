import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tm_wncc5w {
  fill: currentColor;
  d: path("M9.47 9.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1-1.06 1.06L10 10.81l-4.72 4.72a.75.75 0 0 1-1.06-1.06zm0-5.5a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1-1.06 1.06L10 5.31l-4.72 4.72a.75.75 0 0 1-1.06-1.06z");
}
</style><path class="tm_wncc5w"/>`,
		"fallback": "fluent:chevron-double-up-20-filled",
	});
}

export default Component;
