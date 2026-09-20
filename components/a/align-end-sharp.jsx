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
		"content": `<style>.fmdtxac7y {
  fill: currentColor;
  d: path("M3 21v-1h18v1zm4.5-10.5v-2h9v2zm0 6v-2h9v2z");
}
</style><path class="fmdtxac7y"/>`,
		"fallback": "material-symbols-light:align-end-sharp",
	});
}

export default Component;
