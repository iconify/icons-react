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
		"content": `<style>.u56kdfmjm {
  fill: currentColor;
  d: path("M2 20V4h8l2 2h10v14z");
}
</style><path class="u56kdfmjm"/>`,
		"fallback": "material-symbols:folder-sharp",
	});
}

export default Component;
