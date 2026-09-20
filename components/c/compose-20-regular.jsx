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
		"content": `<style>.scuzs7bvo {
  fill: currentColor;
  d: path("M10.5 4a.5.5 0 0 1 0 1H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9.5a.5.5 0 1 1 1 0V14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm5.647-.853a.5.5 0 1 1 .707.707L9.06 11.645L8 12l.354-1.06z");
}
</style><path class="scuzs7bvo"/>`,
		"fallback": "fluent:compose-20-regular",
	});
}

export default Component;
