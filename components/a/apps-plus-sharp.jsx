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
		"content": `<style>.xugo0db9o {
  fill: currentColor;
  d: path("M11 20h11v-7H11zm-9-9h10V4H2zm0 9h7v-7H2zm15-9V8h-3V6h3V3h2v3h3v2h-3v3z");
}
</style><path class="xugo0db9o"/>`,
		"fallback": "material-symbols:apps-plus-sharp",
	});
}

export default Component;
