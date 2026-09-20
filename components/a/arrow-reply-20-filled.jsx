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
		"content": `<style>.xy28q6bts {
  fill: currentColor;
  d: path("M7.78 4.78a.75.75 0 0 0-1.06-1.06l-4.5 4.5a.75.75 0 0 0 0 1.06l4.5 4.5a.75.75 0 0 0 1.06-1.06L4.56 9.5h6.19a5.75 5.75 0 0 1 5.75 5.75a.75.75 0 0 0 1.5 0A7.25 7.25 0 0 0 10.75 8H4.56z");
}
</style><path class="xy28q6bts"/>`,
		"fallback": "fluent:arrow-reply-20-filled",
	});
}

export default Component;
