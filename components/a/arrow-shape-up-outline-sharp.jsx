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
		"content": `<style>.nmytzntus {
  fill: currentColor;
  d: path("M8 21v-6H3l9-11l9 11h-5v6zm2-2h4v-6h2.775L12 7.15L7.225 13H10zm2-6");
}
</style><path class="nmytzntus"/>`,
		"fallback": "material-symbols:arrow-shape-up-outline-sharp",
	});
}

export default Component;
