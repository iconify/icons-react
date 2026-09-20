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
		"content": `<style>.f35jv97gg {
  fill: currentColor;
  d: path("M6.189 17.289L5.5 16.6L15.58 6.5H6.289v-1h11v11h-1V7.208z");
}
</style><path class="f35jv97gg"/>`,
		"fallback": "material-symbols-light:arrow-outward-outline-sharp",
	});
}

export default Component;
