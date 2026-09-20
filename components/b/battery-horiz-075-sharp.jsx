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
		"content": `<style>.oatzu2k0q {
  fill: currentColor;
  d: path("M4 17v-3H2v-4h2V7h18v10zm2-2h4V9H6z");
}
</style><path class="oatzu2k0q"/>`,
		"fallback": "material-symbols:battery-horiz-075-sharp",
	});
}

export default Component;
