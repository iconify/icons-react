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
		"content": `<style>.p38njhtgy {
  fill: currentColor;
  d: path("M3 4V3h18v1zm8 16V7h2v13z");
}
</style><path class="p38njhtgy"/>`,
		"fallback": "material-symbols-light:align-flex-start-sharp",
	});
}

export default Component;
