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
		"content": `<style>.t8kimy0qz {
  fill: currentColor;
  d: path("M10 18a8 8 0 1 1 0-16a8 8 0 0 1 0 16m-1.854-4.854a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 1 0-.708.708L11.293 10z");
}
</style><path class="t8kimy0qz"/>`,
		"fallback": "fluent:chevron-circle-right-20-filled",
	});
}

export default Component;
