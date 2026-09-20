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
		"content": `<style>.xefaboy3l {
  fill: currentColor;
  d: path("M11.5 17.308V7.416l-4.1 4.1l-.708-.708L12 5.5l5.308 5.308l-.708.708l-4.1-4.1v9.892z");
}
</style><path class="xefaboy3l"/>`,
		"fallback": "material-symbols-light:arrow-upward-alt-sharp",
	});
}

export default Component;
