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
		"content": `<style>.ss65rm3ja {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-2h7V6H4zm9 0h7V6h-7zm1-8h5V8.5h-5zm0 2.5h5V11h-5zm0 2.5h5v-1.5h-5zM4 6v12z");
}
</style><path class="ss65rm3ja"/>`,
		"fallback": "material-symbols:chrome-reader-mode-outline-sharp",
	});
}

export default Component;
