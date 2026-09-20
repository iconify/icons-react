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
		"content": `<style>.leqzc6bmm {
  fill: currentColor;
  d: path("M20 9V6h-3V4h5v5zM2 9V4h5v2H4v3zm15 11v-2h3v-3h2v5zM2 20v-5h2v3h3v2zm4-4V8h12v8z");
}
</style><path class="leqzc6bmm"/>`,
		"fallback": "material-symbols:fit-screen-sharp",
	});
}

export default Component;
