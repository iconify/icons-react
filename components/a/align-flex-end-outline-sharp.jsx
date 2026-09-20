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
		"content": `<style>.t-9s9sbjt {
  fill: currentColor;
  d: path("M3 21v-1h18v1zm8-4V4h2v13z");
}
</style><path class="t-9s9sbjt"/>`,
		"fallback": "material-symbols-light:align-flex-end-outline-sharp",
	});
}

export default Component;
