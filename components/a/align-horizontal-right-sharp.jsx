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
		"content": `<style>.d028cbbvj {
  fill: currentColor;
  d: path("M19.23 21V3h1v18zm-9.46-4.692v-2.039h6.884v2.039zm-6-6.577V7.692h12.884v2.039z");
}
</style><path class="d028cbbvj"/>`,
		"fallback": "material-symbols-light:align-horizontal-right-sharp",
	});
}

export default Component;
