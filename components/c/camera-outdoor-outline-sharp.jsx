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
		"content": `<style>.kw74gru7p {
  fill: currentColor;
  d: path("M11.923 17.616v-5.231h5.23v2.077L19 13.489v3.022l-1.846-.972v2.077zM5 20V9.5l7-5.27l7 5.27V11h-1v-1l-6-4.5L6 10v9h13v1zm7-7.75");
}
</style><path class="kw74gru7p"/>`,
		"fallback": "material-symbols-light:camera-outdoor-outline-sharp",
	});
}

export default Component;
