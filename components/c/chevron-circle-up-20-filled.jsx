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
		"content": `<style>.ur6ot-bow {
  fill: currentColor;
  d: path("M2 10a8 8 0 1 0 16 0a8 8 0 0 0-16 0m4.854 1.854a.5.5 0 0 1-.708-.708l3.5-3.5a.5.5 0 0 1 .708 0l3.5 3.5a.5.5 0 0 1-.708.708L10 8.707z");
}
</style><path class="ur6ot-bow"/>`,
		"fallback": "fluent:chevron-circle-up-20-filled",
	});
}

export default Component;
