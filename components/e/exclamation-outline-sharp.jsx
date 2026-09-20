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
		"content": `<style>.bf1k4r5sc {
  fill: currentColor;
  d: path("M11 14V5h2v9zm0 5v-2h2v2z");
}
</style><path class="bf1k4r5sc"/>`,
		"fallback": "material-symbols:exclamation-outline-sharp",
	});
}

export default Component;
