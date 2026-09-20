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
		"content": `<style>.ketmu2bfq {
  fill: currentColor;
  d: path("M2 19V5h9V3h2v2h9v14h-9v2h-2v-2zm2-2h7v-2H4zm0-8h7V7H4zm0 4h10v-2H4zm9 4h7V7h-7v2h3v6h-3zm-9-4v-2z");
}
</style><path class="ketmu2bfq"/>`,
		"fallback": "material-symbols:bullet-chart-outline",
	});
}

export default Component;
