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
		"content": `<style>.q6nb14bed {
  fill: currentColor;
  d: path("M20 15H4v-2h16zm0 2H4v2h16zm-5-6l5-3.55V5l-5 3.55L10 5L4 8.66V11l5.92-3.61z");
}
</style><path class="q6nb14bed"/>`,
		"fallback": "ic:baseline-legend-toggle",
	});
}

export default Component;
