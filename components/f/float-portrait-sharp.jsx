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
		"content": `<style>.zlk4w4c1a {
  fill: currentColor;
  d: path("M15 22v-7h5v7ZM4 22V2h16v11h-7v9Z");
}
</style><path class="zlk4w4c1a"/>`,
		"fallback": "material-symbols:float-portrait-sharp",
	});
}

export default Component;
