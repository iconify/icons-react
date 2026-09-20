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
		"content": `<style>.le4vp4bvi {
  fill: currentColor;
  d: path("M11.154 14.5h1.038L16 6.5v-1h-5v1h3.962zM6.5 17V3h14v14zm-3 3V6.616h1V19h12.385v1z");
}
</style><path class="le4vp4bvi"/>`,
		"fallback": "material-symbols-light:filter-7-sharp",
	});
}

export default Component;
