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
		"content": `<style>.wi4bzf25e {
  fill: currentColor;
  d: path("M3.5 2a.5.5 0 0 1 .5.5V6h12V2.5a.5.5 0 0 1 1 0v12a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 3 14.5v-12a.5.5 0 0 1 .5-.5m.5 9v3.5A2.5 2.5 0 0 0 6.5 17h7a2.5 2.5 0 0 0 2.5-2.5V11zm12-1V7H4v3z");
}
</style><path class="wi4bzf25e"/>`,
		"fallback": "fluent:eraser-tool-20-regular",
	});
}

export default Component;
