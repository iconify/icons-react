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
		"content": `<style>.t2osambjn {
  fill: currentColor;
  d: path("M10 17V7l5 5z");
}
</style><path class="t2osambjn"/>`,
		"fallback": "material-symbols:arrow-right",
	});
}

export default Component;
