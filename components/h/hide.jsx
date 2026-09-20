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
		"content": `<style>.zbtirkqik {
  fill: currentColor;
  d: path("M4.425 21L3 19.575L7.6 15H5v-2h6v6H9v-2.6zM13 11V5h2v2.6L19.575 3L21 4.425L16.4 9H19v2z");
}
</style><path class="zbtirkqik"/>`,
		"fallback": "material-symbols:hide",
	});
}

export default Component;
