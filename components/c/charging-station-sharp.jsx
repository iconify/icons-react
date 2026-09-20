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
		"content": `<style>.fxsnc_twd {
  fill: currentColor;
  d: path("M11.5 17v-4h-2l3-6v4h2zM5 23V1h14v22zm2-5h10V6H7z");
}
</style><path class="fxsnc_twd"/>`,
		"fallback": "material-symbols:charging-station-sharp",
	});
}

export default Component;
