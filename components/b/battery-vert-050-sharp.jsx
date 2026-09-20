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
		"content": `<style>.qzxd0nn_c {
  fill: currentColor;
  d: path("M7 22V4h3V2h4v2h3v18H7Zm2-9h6V6H9v7Z");
}
</style><path class="qzxd0nn_c"/>`,
		"fallback": "material-symbols:battery-vert-050-sharp",
	});
}

export default Component;
