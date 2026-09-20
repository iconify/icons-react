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
		"content": `<style>.vjovd25sv {
  fill: currentColor;
  d: path("M2 20V4h20v16zM4 8h16V6H4zm0 10h16v-6H4zm0 0V6z");
}
</style><path class="vjovd25sv"/>`,
		"fallback": "material-symbols:credit-card-outline-sharp",
	});
}

export default Component;
