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
		"content": `<style>.ve2q_bbad {
  fill: currentColor;
  d: path("M3 21V7h2v12h12v2zm4-4v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm0-4V3h2v2zm4 12v-2h2v2zm0-12V3h2v2zm4 0V3h2v2zm0 12v-2h2v2zm4-12V3h2v2zm0 12v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2z");
}
</style><path class="ve2q_bbad"/>`,
		"fallback": "material-symbols:flip-to-back-outline-sharp",
	});
}

export default Component;
