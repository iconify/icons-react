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
		"content": `<style>.gvedy3bot {
  fill: currentColor;
  d: path("M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z");
}
</style><path class="gvedy3bot"/>`,
		"fallback": "ic:baseline-assistant-photo",
	});
}

export default Component;
