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
		"content": `<style>.gt0xu8bzt {
  fill: currentColor;
  d: path("M7 13h10v-2H7zm-4 8V3h18v18z");
}
</style><path class="gt0xu8bzt"/>`,
		"fallback": "material-symbols:chips-sharp",
	});
}

export default Component;
