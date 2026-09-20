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
		"content": `<style>.xcm4_ib0f {
  fill: currentColor;
  d: path("M4 17v-3H2v-4h2V7h18v10zm2-2h11V9H6z");
}
</style><path class="xcm4_ib0f"/>`,
		"fallback": "material-symbols:battery-low-outline-sharp",
	});
}

export default Component;
