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
		"content": `<style>.u2hc5bcan {
  fill: currentColor;
  d: path("M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4z");
}
</style><path class="u2hc5bcan"/>`,
		"fallback": "material-symbols:arrow-outward-sharp",
	});
}

export default Component;
