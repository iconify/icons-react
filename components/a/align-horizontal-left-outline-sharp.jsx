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
		"content": `<style>.met22ebbu {
  fill: currentColor;
  d: path("M3.77 21V3h1v18zm3.576-4.692v-2.039h6.885v2.039zm0-6.577V7.692h12.885v2.039z");
}
</style><path class="met22ebbu"/>`,
		"fallback": "material-symbols-light:align-horizontal-left-outline-sharp",
	});
}

export default Component;
