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
		"content": `<style>.n8c2sfteq {
  fill: currentColor;
  d: path("M2 3.5A1.5 1.5 0 0 1 3.5 2h2A1.5 1.5 0 0 1 7 3.5v2.043a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5zM8 4h5.5A1.5 1.5 0 0 1 15 5.5V9h-1V5.5a.5.5 0 0 0-.5-.5H8zM5 8v5.5a.5.5 0 0 0 .5.5H9v1H5.5A1.5 1.5 0 0 1 4 13.5V8zm6.504 2a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 1.5 1.5h5a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5z");
}
</style><path class="n8c2sfteq"/>`,
		"fallback": "fluent:fluid-20-filled",
	});
}

export default Component;
