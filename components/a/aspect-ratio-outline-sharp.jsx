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
		"content": `<style>.xha3dx-sd {
  fill: currentColor;
  d: path("M14 17h5v-5h-2v3h-3zm-9-5h2V9h3V7H5zm-3 8V4h20v16zm2-2h16V6H4zm0 0V6z");
}
</style><path class="xha3dx-sd"/>`,
		"fallback": "material-symbols:aspect-ratio-outline-sharp",
	});
}

export default Component;
