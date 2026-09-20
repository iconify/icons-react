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
		"content": `<style>.meja6hbnv {
  fill: currentColor;
  d: path("M1 20L12 1l11 19zm3.475-2h15.05L12 5zM11 16.5h2v-2h2v-2h-2v-2h-2v2H9v2h2zm1-3");
}
</style><path class="meja6hbnv"/>`,
		"fallback": "material-symbols:add-triangle-outline",
	});
}

export default Component;
