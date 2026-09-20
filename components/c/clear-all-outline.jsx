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
		"content": `<style>.r7wqj2bvy {
  fill: currentColor;
  d: path("M3 17v-2h14v2zm2-4v-2h14v2zm2-4V7h14v2z");
}
</style><path class="r7wqj2bvy"/>`,
		"fallback": "material-symbols:clear-all-outline",
	});
}

export default Component;
