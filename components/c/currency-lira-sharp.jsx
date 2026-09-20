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
		"content": `<style>.r7ygcxbwi {
  fill: currentColor;
  d: path("M9 21v-5.15l-3 1.875V15.35l3-1.875v-2.35L6 13v-2.35l3-1.9V3h2v4.5L15 5v2.35l-4 2.525v2.35l4-2.5v2.35L11 14.6V19q2.075 0 3.538-1.463T16 14h2q0 2.925-2.037 4.963T11 21z");
}
</style><path class="r7ygcxbwi"/>`,
		"fallback": "material-symbols:currency-lira-sharp",
	});
}

export default Component;
