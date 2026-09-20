import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ptxucpbsa {
  fill: currentColor;
  d: path("M14 20V7H9V4h13v3h-5v13zm-9 0v-8H2V9h9v3H8v8z");
}
</style><path class="ptxucpbsa"/>`,
		"fallback": "material-symbols:format-size-outline-sharp",
	});
}

export default Component;
