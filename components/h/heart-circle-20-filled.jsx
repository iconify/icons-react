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
		"content": `<style>.lq08gebvl {
  fill: currentColor;
  d: path("M2 10a8 8 0 1 0 16 0a8 8 0 0 0-16 0m7.6-2.385L9.99 8l.4-.393a2.12 2.12 0 0 1 3.035 2.959l-3.06 3.273a.5.5 0 0 1-.73 0L6.57 10.561A2.113 2.113 0 0 1 9.6 7.615");
}
</style><path class="lq08gebvl"/>`,
		"fallback": "fluent:heart-circle-20-filled",
	});
}

export default Component;
