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
		"content": `<style>.bm_fkhbnm {
  fill: currentColor;
  d: path("M7.78 4.78a.75.75 0 0 0-1.06-1.06l-4.5 4.5a.75.75 0 0 0 0 1.06l4.5 4.5a.75.75 0 0 0 1.06-1.06L3.81 8.75zm3.5 0a.75.75 0 0 0-1.06-1.06l-4.5 4.5a.75.75 0 0 0 0 1.06l4.5 4.5a.75.75 0 1 0 1.06-1.06L8.06 9.5h2.69a5.75 5.75 0 0 1 5.75 5.75a.75.75 0 0 0 1.5 0A7.25 7.25 0 0 0 10.75 8H8.06z");
}
</style><path class="bm_fkhbnm"/>`,
		"fallback": "fluent:arrow-reply-all-20-filled",
	});
}

export default Component;
