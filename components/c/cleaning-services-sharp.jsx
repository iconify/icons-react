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
		"content": `<style>.w107djeae {
  fill: currentColor;
  d: path("M4 22V11.712h5.712V2h4.577v9.712H20V22zm1-1h2.75v-4.02h1V21h2.75v-4.02h1V21h2.75v-4.02h1V21H19v-8.288H5z");
}
</style><path class="w107djeae"/>`,
		"fallback": "material-symbols-light:cleaning-services-sharp",
	});
}

export default Component;
