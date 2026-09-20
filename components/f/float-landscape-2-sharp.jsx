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
		"content": `<style>.yr_mosbdc {
  fill: currentColor;
  d: path("M13 14h5V8h-5zM2 20V4h20v16z");
}
</style><path class="yr_mosbdc"/>`,
		"fallback": "material-symbols:float-landscape-2-sharp",
	});
}

export default Component;
