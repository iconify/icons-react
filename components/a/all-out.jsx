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
		"content": `<style>.v2b8xqbez {
  fill: currentColor;
  d: path("M3 21v-5h2v3h3v2zm13 0v-2h3v-3h2v5zm-8.95-4.05Q5 14.9 5 12t2.05-4.95T12 5t4.95 2.05T19 12t-2.05 4.95T12 19t-4.95-2.05M3 8V3h5v2H5v3zm16 0V5h-3V3h5v5z");
}
</style><path class="v2b8xqbez"/>`,
		"fallback": "material-symbols:all-out",
	});
}

export default Component;
