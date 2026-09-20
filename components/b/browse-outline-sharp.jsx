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
		"content": `<style>.xuwc27sjw {
  fill: currentColor;
  d: path("M4 20v-5h7v5zm9 0v-9h7v9zm-9-7V4h7v9zm9-4V4h7v5zM5 19h5v-3H5zm9 0h5v-7h-5zm-9-7h5V5H5zm9-4h5V5h-5z");
}
</style><path class="xuwc27sjw"/>`,
		"fallback": "material-symbols-light:browse-outline-sharp",
	});
}

export default Component;
