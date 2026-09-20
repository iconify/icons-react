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
		"content": `<style>.zy053ufzu {
  fill: currentColor;
  d: path("M12 10h5V8h-5zm0 6h5v-2h-5zm-5-5h4V7H7zm0 6h4v-4H7zm-4 4V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="zy053ufzu"/>`,
		"fallback": "material-symbols:ballot-outline-sharp",
	});
}

export default Component;
