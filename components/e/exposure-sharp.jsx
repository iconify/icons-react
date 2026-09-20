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
		"content": `<style>.b65e7mxlk {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h14V5zm9.808-1.308v-2h-2v-.884h2v-2h.884v2h2v.884h-2v2zm-8.5-9.5h4.384v-.884H6.308z");
}
</style><path class="b65e7mxlk"/>`,
		"fallback": "material-symbols-light:exposure-sharp",
	});
}

export default Component;
