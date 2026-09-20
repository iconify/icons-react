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
		"content": `<style>.focs3jbxu {
  fill: currentColor;
  d: path("M8.275 11.7L4 7.425V11H2V4h7v2H5.4l4.3 4.275zM2 20v-7h2v5h8v2zm18-7V6h-9V4h11v9zm2 2v5h-8v-5z");
}
</style><path class="focs3jbxu"/>`,
		"fallback": "material-symbols:back-to-tab-sharp",
	});
}

export default Component;
