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
		"content": `<style>.cwiwjnbbn {
  fill: currentColor;
  d: path("M18.447 8.106a.998.998 0 0 1 0 1.788L7 15.618V21a1 1 0 0 1-2 0V3a1 1 0 0 1 1.447-.894Z");
}
</style><path class="cwiwjnbbn"/>`,
		"fallback": "coolicons:flag-triangle-fill-sharp",
	});
}

export default Component;
