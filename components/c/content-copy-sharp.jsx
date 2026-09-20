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
		"content": `<style>.srqqheb8i {
  fill: currentColor;
  d: path("M7.5 17V3h11v14zm-3 3V6.616h1V19h9.385v1z");
}
</style><path class="srqqheb8i"/>`,
		"fallback": "material-symbols-light:content-copy-sharp",
	});
}

export default Component;
